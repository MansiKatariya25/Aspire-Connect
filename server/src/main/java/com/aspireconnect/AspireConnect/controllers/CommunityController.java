package com.aspireconnect.AspireConnect.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.aspireconnect.AspireConnect.model.Community;
import com.aspireconnect.AspireConnect.model.User;
import com.aspireconnect.AspireConnect.repository.UserRepo;
import com.aspireconnect.AspireConnect.service.CommunityService;
import com.aspireconnect.AspireConnect.service.FileService;
import com.aspireconnect.AspireConnect.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/community")
public class CommunityController {

    private final CommunityService communityService;
    private final FileService fileService;
    private final ObjectMapper objectMapper; // JSON parser
    private final UserService userService;

    @Autowired
    public CommunityController(CommunityService communityService, FileService fileService, ObjectMapper objectMapper,
            UserService userService) {
        this.communityService = communityService;
        this.fileService = fileService;
        this.objectMapper = objectMapper;
        this.userService = userService;
    }

    @PostMapping(value = "/send-post", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<?> postMethodName(
            @RequestPart(value = "postImage", required = false) MultipartFile file,
            @RequestPart("entity") String entityJson) {
        try {
            // Convert JSON String to Java Object
            Community entity = objectMapper.readValue(entityJson, Community.class);

            // Get user email from authentication context
            String email = SecurityContextHolder.getContext().getAuthentication().getName();
            entity.setEmail(email);
            User user = userService.getUserByEmail(email);
            entity.setUser(user);
            // Set default values for like, comment, and share
            entity.setLikes(null);
            entity.setComment("0");
            entity.setShare("0");

            // Upload the file if provided and set the image URL
            if (file != null && !file.isEmpty()) {
                String image = fileService.uploadFile(file);
                entity.setImage(image);
            }

            // Save post in MongoDB
            communityService.sendPost(entity);

            return ResponseEntity.ok("Post sent successfully");

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error sending post: " + e.getMessage());
        }
    }

    @GetMapping("/get-posts")
    public ResponseEntity<?> getPosts() {
        try {
            String email = SecurityContextHolder.getContext().getAuthentication().getName();
            List<Community> posts = communityService.getAllPosts(email);
            return ResponseEntity.ok(posts);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting posts: " + e.getMessage());
        }
    }

    @GetMapping("/get-my-posts")
    public ResponseEntity<?> getmyPosts() {
        try {
            String email = SecurityContextHolder.getContext().getAuthentication().getName();
            List<Community> posts = communityService.getmyPosts(email);
            return ResponseEntity.ok(posts);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting posts: " + e.getMessage());
        }
    }

    @GetMapping("/get-posts-by-email/{email}")
    public ResponseEntity<?> getPostsByemail(@PathVariable String email) {
        try {
            List<Community> posts = communityService.getmyPosts(email);
            return ResponseEntity.ok(posts);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting posts: " + e.getMessage());
        }
    }

    @PutMapping("/like/{communityId}")
    public ResponseEntity<String> putLike(@PathVariable String communityId) {
        try {
            String email = SecurityContextHolder.getContext().getAuthentication().getName();
            // Call the like/unlike method from the service
            String result = communityService.likeById(communityId, email);

            if ("liked".equals(result)) {
                return ResponseEntity.ok("Post liked successfully");
            } else if ("unliked".equals(result)) {
                return ResponseEntity.ok("Post unliked successfully");
            } else if ("community_or_user_not_found".equals(result)) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Community post or user not found");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Error processing like/unlike request "+ result);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error liking/unliking post: " + e.getMessage());
        }
    }

    @PutMapping("/follow/{id}")
    public ResponseEntity<String> addFollowers(@PathVariable String id) {
        try {
            // Retrieve the currently authenticated user's email from the security context
            String email = SecurityContextHolder.getContext().getAuthentication().getName();

            // Call the service method to handle following a user
            String response = communityService.followById(id, email);

            // Return a successful response with a message
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Return a bad request response with the error message
            return ResponseEntity.badRequest().body("Error following user: " + e.getMessage());
        }
    }

}
