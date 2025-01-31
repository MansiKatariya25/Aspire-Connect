package com.aspireconnect.AspireConnect.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.aspireconnect.AspireConnect.model.User;
import com.aspireconnect.AspireConnect.service.FileService;
import com.aspireconnect.AspireConnect.service.UserService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/files")
public class FileController {

    @Autowired
    private FileService fileService;

    @Autowired
    private UserService userService;

    // Endpoint to upload a file

    @PostMapping("/update-profile")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            // ✅ Validate File
            if (file.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("File is empty. Please upload a valid image.");
            }

            // ✅ Authenticate User
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User is not authenticated.");
            }
            String username = authentication.getName();
            String url = userService.getUserByEmail(username).getProfile_pic();
            if (url != null && !url.isEmpty()) {
                // ✅ Delete old profile pic from Cloudinary
                fileService.deleteFile(url);
            }
            // ✅ Upload to Cloudinary
            String fileUrl = fileService.uploadFile(file);
            if (fileUrl == null || fileUrl.isEmpty()) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Failed to upload file to Cloudinary.");
            }

            // ✅ Update User Profile
            User user = fileService.updateProfile(fileUrl, username);
            if (user == null) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update profile.");
            }

            return ResponseEntity.ok("Profile updated! Image URL: " + fileUrl);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Upload failed due to an error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error: " + e.getMessage());
        }
    }

    // Endpoint to download a file by ID
    // @GetMapping("/get-media/{fileId}")
    // public ResponseEntity<?> getFile(@PathVariable String fileId) {
    // try {
    // GridFsResource resource = fileService.getFile(fileId);

    // return ResponseEntity.ok()
    // .contentType(MediaType.parseMediaType(resource.getContentType()))
    // .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" +
    // resource.getFilename() + "\"")
    // .body(resource.getInputStream().readAllBytes());
    // } catch (IOException e) {
    // return ResponseEntity.status(500).body("Error retrieving file: " +
    // e.getMessage());
    // }
    // }

    @GetMapping("path")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    
}
