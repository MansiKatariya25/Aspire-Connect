package com.aspireconnect.AspireConnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspireconnect.AspireConnect.model.User;
import com.aspireconnect.AspireConnect.repository.UserRepo;

import jakarta.persistence.EntityNotFoundException;

@Service

public class MentorService {
    @Autowired
    UserRepo userRepo;

    public List<User> getByRole(String role) {
        List<User> mentors = userRepo.findByRole(role);
        if (mentors.isEmpty()) {
            throw new EntityNotFoundException("No mentors found with role: " + role);
        }
        return mentors;
    }

}