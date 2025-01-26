package com.aspireconnect.AspireConnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspireconnect.AspireConnect.model.User;
import com.aspireconnect.AspireConnect.repository.UserRepo;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CompanyService {
    @Autowired
    private UserRepo userRepo;

    public List<User> getByRole(String role) {
        List<User> company = userRepo.findByRole(role);
        if (company.isEmpty()) {
            throw new EntityNotFoundException("No Company found with role: " + role);
        }
        return company;
    }

}
