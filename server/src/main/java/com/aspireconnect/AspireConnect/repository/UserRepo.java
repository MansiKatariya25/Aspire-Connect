package com.aspireconnect.AspireConnect.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.aspireconnect.AspireConnect.model.User;

@Repository

public interface UserRepo extends MongoRepository<User, String> {

    Optional<User> findByEmail(String email);

    List<User> findByRole(String role);

    @Query("{ '$or': [ " +
            "{ 'email': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'fname': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'lname': { '$regex': ?0, '$options': 'i' } } " +
            "] }")
    List<User> findByEmailContainingIgnoreCase(String email);

}