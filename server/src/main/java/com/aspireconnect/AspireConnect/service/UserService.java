package com.aspireconnect.AspireConnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspireconnect.AspireConnect.model.User;
import com.aspireconnect.AspireConnect.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepository;

    public User createUser(User user) {

        return userRepository.save(user);
    }

    public User loginUser(String email) {
        return userRepository.findByEmail(email)
                .orElse(null);
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElse(null);

    }

    public User updatePass(String pass, String email) {
        try {
            User user = getUserByEmail(email);
            user.setPassword(pass);
            return userRepository.save(user);
        } catch (Exception e) {
            return null;
        }

    }

    public List<User> getUserByQuery(String email) {
        return userRepository.findByEmailContainingIgnoreCase(email);

    }

    public User updateUser(User user) {
        return userRepository.save(user); // Save updated user in MongoDB
    }


}
