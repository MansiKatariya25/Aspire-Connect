package com.aspireconnect.AspireConnect.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspireconnect.AspireConnect.model.Chat;
import com.aspireconnect.AspireConnect.repository.ChatRepo;

@Service
public class ChatService {
    @Autowired
    private ChatRepo chatRepo;

    // public Chat sendMessage(String senderEmail, String message) {
    //   try {
    //      chatRepo.save(new Chat(senderEmail, message, message, null));
    //   } catch (Exception e) {
    //     // TODO: handle exception
    //   }
      
    // }
}
