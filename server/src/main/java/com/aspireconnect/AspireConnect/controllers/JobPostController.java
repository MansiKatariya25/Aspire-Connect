package com.aspireconnect.AspireConnect.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.aspireconnect.AspireConnect.model.AppliedUser;
import com.aspireconnect.AspireConnect.model.JobPost;
import com.aspireconnect.AspireConnect.model.User;
import com.aspireconnect.AspireConnect.service.JobService;
import com.aspireconnect.AspireConnect.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/jobs")
public class JobPostController {
    @Autowired
    private JobService jobservice;
    @Autowired
    private UserService userservice;

    @PostMapping("/jobPost")
    public ResponseEntity<?> jobPost(@RequestBody JobPost jobPost) {
        try {
            String email = SecurityContextHolder.getContext().getAuthentication().getName();
            User user = userservice.getUserByEmail(email);
            jobPost.setUser(user);
            jobPost.setPostedby(email);
            jobservice.sendJobPost(jobPost);
            return ResponseEntity.ok("Job Posted Sucessfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @GetMapping("/getPost")
    public ResponseEntity<?> getJobPost() {
        try {
            List<JobPost> post = jobservice.getJobPost();
            return ResponseEntity.ok(post);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @PostMapping("/apply/{id}/{link}/{applierid}")
    public String applyForJob(@PathVariable String id, @PathVariable String link, @PathVariable String applierid) {
        try {
            // Call the service method to apply for the job
            return jobservice.applyJob(id, applierid, link);
        } catch (Exception e) {
            e.printStackTrace();
            return "Error occurred while applying for the job";
        }
    }

}
