package com.aspireconnect.AspireConnect.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.eclipse.angus.mail.handlers.message_rfc822;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aspireconnect.AspireConnect.model.Chat;
import com.aspireconnect.AspireConnect.model.Messages;
import com.aspireconnect.AspireConnect.model.User;
import com.aspireconnect.AspireConnect.repository.ChatRepo;
import com.aspireconnect.AspireConnect.service.ChatService;
import com.aspireconnect.AspireConnect.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/chats")
public class ChatController {

    // @Autowired
    // private ChatService chatService;
    @Autowired
    private ChatRepo chatRepository;
    @Autowired
    private UserService userService;
    // @Autowired
    // private Chat chat;

    @PostMapping("/send-message")
    public ResponseEntity<?> sendMessage(@RequestBody Messages messageRequest) {
        try {
            // Get the authenticated user's email
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String currentUserEmail = auth.getName();
            
            messageRequest.setSender(currentUserEmail);  // Set sender as the current authenticated user
            String receiverEmail = messageRequest.getReceiver();
    
            // ✅ Find if there's any existing chat regardless of who sent the message
            List<Chat> existingChats = chatRepository.findBySenderEmailAndReceiverEmailOrSenderEmailAndReceiverEmail(
                currentUserEmail, receiverEmail,    // Case 1: Current user is sender
                receiverEmail, currentUserEmail     // Case 2: Current user is receiver
            );
    
            Chat chat;
            if (!existingChats.isEmpty()) {
                // ✅ If chat exists, get the first one (assuming one-to-one chat)
                chat = existingChats.get(0);
            } else {
                // ✅ If no chat exists, create a new one
                chat = new Chat(null, currentUserEmail, receiverEmail, new ArrayList<>());
            }
    
            // ✅ Add the new message to the chat
            Messages newMessage = new Messages(
                currentUserEmail,
                receiverEmail,
                messageRequest.getContent(),
                new Date()
            );
    
            chat.getMessages().add(newMessage);
            chatRepository.save(chat);  // ✅ Save the updated chat to MongoDB
    
            return ResponseEntity.ok("Message sent successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to send message: " + e.getMessage());
        }
    }
    

    @GetMapping("/get-messages")
    public ResponseEntity<?> getMessages(@RequestParam String receiverEmail) {
        String senderEmail = SecurityContextHolder.getContext().getAuthentication().getName();

        // ✅ Fetch chats where either the current user is the sender or receiver
        List<Chat> chats = chatRepository.findBySenderEmailAndReceiverEmailOrSenderEmailAndReceiverEmail(
                senderEmail, receiverEmail, // Case 1: Current user is sender
                receiverEmail, senderEmail // Case 2: Current user is receiver
        );

        if (!chats.isEmpty()) {
            return ResponseEntity.ok(chats.get(0).getMessages()); // Return messages from the first matched chat
        } else {
            return ResponseEntity.ok("No messages found!");
        }
    }

    @GetMapping("/get-chat-list")
    public ResponseEntity<?> getChatList() {
        try {
            // ✅ Get the current user's email from the authentication context
            String currentUserEmail = SecurityContextHolder.getContext().getAuthentication().getName();

            // ✅ Fetch all chats where the user is either sender or receiver
            List<Chat> allChats = chatRepository.findBySenderEmailOrReceiverEmail(currentUserEmail, currentUserEmail);

            // ✅ Prepare response with the other participant and the last message
            List<Map<String, Object>> chatList = new ArrayList<>();

            for (Chat chat : allChats) {
                List<Messages> messages = chat.getMessages();

                if (!messages.isEmpty()) {
                    // ✅ Get the last message in the conversation
                    Messages lastMessage = messages.get(messages.size() - 1);

                    // ✅ Determine the other participant's email
                    String otherParticipantEmail = currentUserEmail.equals(chat.getSenderEmail())
                            ? chat.getReceiverEmail()
                            : chat.getSenderEmail();

                    // ✅ Prepare chat details
                    Map<String, Object> chatDetails = new HashMap<>();
                    chatDetails.put("email", otherParticipantEmail);
                    chatDetails.put("lastMessage", lastMessage.getContent());
                    chatDetails.put("timestamp", lastMessage.getTimestamp());

                    // ✅ Add user information (replace with actual logic if available)
                    chatDetails.put("user", getUser(otherParticipantEmail));

                    chatList.add(chatDetails);
                }
            }

            // ✅ Sort chats by the latest message timestamp
            chatList.sort((c1, c2) -> ((Date) c2.get("timestamp")).compareTo((Date) c1.get("timestamp")));

            return ResponseEntity.ok(chatList);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to fetch chat list: " + e.getMessage());
        }
    }

    // Placeholder for fetching user details (implement with your user service)
    private User getUser(String email) {
        return userService.getUserByEmail(email); // Replace with actual logic to fetch user's name
    }

}
