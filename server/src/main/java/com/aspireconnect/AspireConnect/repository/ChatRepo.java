package com.aspireconnect.AspireConnect.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.aspireconnect.AspireConnect.model.Chat;

@Repository
public interface ChatRepo extends MongoRepository<Chat, String> {

    List<Chat> findBySenderEmailAndReceiverEmailOrSenderEmailAndReceiverEmail(
            String senderEmail1, String receiverEmail1,
            String senderEmail2, String receiverEmail2);

    List<Chat> findBySenderEmailOrReceiverEmail(String senderEmail, String receiverEmail);

}
