package com.aspireconnect.AspireConnect.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aspireconnect.AspireConnect.model.User;
import com.aspireconnect.AspireConnect.service.MentorService;

@RestController
@RequestMapping("/api/mentors")
public class MentorController {

    @Autowired
    MentorService mentorService;

    @GetMapping("/get-mentors")
    public ResponseEntity<?> getMentors(@RequestHeader("Authorization") String authorizationHeader) {

        try {
            List<User> result = mentorService.getByRole("Mentor");
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
