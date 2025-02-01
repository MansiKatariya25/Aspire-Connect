package com.aspireconnect.AspireConnect.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aspireconnect.AspireConnect.model.Chat;
import com.aspireconnect.AspireConnect.model.Messages;
import com.aspireconnect.AspireConnect.repository.ChatRepo;
import com.aspireconnect.AspireConnect.service.ChatService;

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
    // @Autowired
    // private Chat chat;

    @PostMapping("/send-message")
    public ResponseEntity<?> sendMessage(@RequestBody Messages messageRequest) {
        try {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String email = auth.getName();
            messageRequest.setSender(email);
            String senderEmail = messageRequest.getSender();
            String receiverEmail = messageRequest.getReceiver();

            // ✅ Find if a chat exists between the two users
            Optional<Chat> existingChat = chatRepository.findBySenderEmailAndReceiverEmail(senderEmail, receiverEmail);
            Chat chat;
            if (existingChat.isPresent()) {
                chat = existingChat.get();
            } else {
                // ✅ If no chat exists, create a new one
                chat = new Chat(null, senderEmail, receiverEmail, new ArrayList<>());
            }

            // ✅ Add the new message to the chat
            Messages newMessage = new Messages(
                    senderEmail,
                    receiverEmail,
                    messageRequest.getContent(),
                    new Date());

            chat.getMessages().add(newMessage);
            chatRepository.save(chat); // ✅ Save the updated chat to MongoDB

            return ResponseEntity.ok("Message sent successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/get-messages")
    public ResponseEntity<?> getMessages(@RequestParam String receiverEmail) {
        String senderEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        Optional<Chat> chat = chatRepository.findBySenderEmailAndReceiverEmail(senderEmail, receiverEmail);

        if (chat.isPresent()) {
            return ResponseEntity.ok(chat.get().getMessages());
        } else {
            return ResponseEntity.ok("No messages found!");
        }
    }
}
