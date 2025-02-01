package com.aspireconnect.AspireConnect.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.aspireconnect.AspireConnect.model.Chat;

@Repository
public interface ChatRepo extends MongoRepository<Chat, String> {
    Optional<Chat> findBySenderEmailAndReceiverEmail(String senderEmail, String receiverEmail);

}
