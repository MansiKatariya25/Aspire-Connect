package com.aspireconnect.AspireConnect.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import com.aspireconnect.AspireConnect.model.Community;

@Repository
public interface CommunityRepo extends MongoRepository<Community, String> {
    @Query("{ 'email' : { '$not' : { '$regex' : ?0, '$options' : 'i' } } }")
    List<Community> findAllExcludingEmails(String excludedEmailPattern);
    List<Community> findByEmail(String email);
}
