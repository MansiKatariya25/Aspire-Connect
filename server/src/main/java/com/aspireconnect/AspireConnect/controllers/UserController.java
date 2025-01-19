package com.aspireconnect.AspireConnect.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.aspireconnect.AspireConnect.model.Otp;
import com.aspireconnect.AspireConnect.model.User;
import com.aspireconnect.AspireConnect.service.OtpService;
import com.aspireconnect.AspireConnect.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private OtpService otpservice;

    // Endpoint to register a new user

    @PostMapping("/auth/register")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        try {
            String pass = passwordEncoder.encode(user.getPassword());
            user.setPassword(pass);
            User result = userService.createUser(user);
            return ResponseEntity.ok(result); // HTTP 200 OK
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage()); // HTTP 500
        }

    }

    @PostMapping("/auth/login")
    public ResponseEntity<?> loginUser(@RequestBody User entity) {

        try {
            String email = entity.getEmail();
            User result = userService.loginUser(email);
            if (passwordEncoder.matches(entity.getPassword(), result.getPassword())) {
                return ResponseEntity.ok(result); // HTTP 200 OK

            }

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("incorrect password"); // HTTP 200 OK
        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage()); // HTTP 500
        }

    }

    @PostMapping("/auth/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody Otp entity) {
        try {
            String email = entity.getEmail();
            otpservice.sendOtp(email);
            return ResponseEntity.ok("OTP sent to " + email);

        } catch (Exception e) {

            return null;
        }
    }

    @PostMapping("/auth/verify-otp")
    public ResponseEntity<String> verifyOtp(@RequestBody Otp entity) {
         boolean isVerified = otpservice.verifyOtp(entity.getEmail(), entity.getOtp());

        if (isVerified) {
            return ResponseEntity.ok("OTP verified successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid or expired OTP.");
        }
    }
    @GetMapping("path")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    

}
