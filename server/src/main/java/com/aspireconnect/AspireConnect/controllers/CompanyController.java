package com.aspireconnect.AspireConnect.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.aspireconnect.AspireConnect.model.User;
import com.aspireconnect.AspireConnect.service.CompanyService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/company")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @GetMapping("/get-company-data")
    public ResponseEntity<?> getData(@RequestHeader("Authorization") String authorizationHeader) {
        try {
            List<User> result = companyService.getByRole("Company");
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
