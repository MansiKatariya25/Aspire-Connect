package com.aspireconnect.AspireConnect.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aspireconnect.AspireConnect.model.Otp;

public interface OtpRepo extends JpaRepository<Otp, Long> {
    Optional<Otp> findByEmail(String email);
    
}
