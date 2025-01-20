package com.aspireconnect.AspireConnect.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.aspireconnect.AspireConnect.model.Otp;

import com.aspireconnect.AspireConnect.repository.OtpRepo;

import com.aspireconnect.AspireConnect.util.OtpUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OtpService {

    private final JavaMailSender javaMailSender;
    private final OtpRepo otpRepo;

    public void sendOtp(String email) {

        String otp = OtpUtil.generateOtp();
        LocalDateTime expiryTime = LocalDateTime.now().plusMinutes(5);

        // save OTP to database

        Otp otp2 = new Otp();
        otp2.setEmail(email);
        otp2.setOtp(otp);
        otp2.setExpiryTime(expiryTime);
        otpRepo.save(otp2);

        // Send Email with OTP
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Your OTP for AspireConnect");
        message.setText("Your OTP is: " + otp);
        javaMailSender.send(message);

    }

    public boolean verifyOtp(String email, String otp) {
        Optional<Otp> otpVerificationOptional = otpRepo.findByEmail(email);

        if (otpVerificationOptional.isPresent()) {
            Otp otpVerification = otpVerificationOptional.get();
            if (otpVerification.getOtp().equals(otp) &&
                    otpVerification.getExpiryTime().isAfter(LocalDateTime.now())) {
                return true;
            }
        }
        return false;
    }
}
