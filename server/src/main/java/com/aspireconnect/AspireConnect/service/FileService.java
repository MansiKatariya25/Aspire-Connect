package com.aspireconnect.AspireConnect.service;

import com.aspireconnect.AspireConnect.model.User;
import com.aspireconnect.AspireConnect.repository.UserRepo;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils; // ✅ Ensure this import is present
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class FileService {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepo userRepo;

    private final Cloudinary cloudinary;

    // ✅ Correct Constructor Injection for Cloudinary
    @Autowired
    public FileService(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    // ✅ Upload file to Cloudinary
    public String uploadFile(MultipartFile file) throws IOException {
        Map uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
        return uploadResult.get("secure_url").toString(); // ✅ Returns Cloudinary URL
    }

    // ✅ Updates profile pic URL in MongoDB
    public User updateProfile(String fileUrl, String username) {
        try {
            User user = userService.getUserByEmail(username);
            if (user == null) {
                throw new RuntimeException("User not found: " + username);
            }
            user.setProfile_pic(fileUrl);
            return userRepo.save(user);
        } catch (Exception e) {
            throw new RuntimeException("Error updating profile: " + e.getMessage());
        }
    }

    public boolean deleteFile(String fileUrl) {
        try {
            String publicId = fileUrl.substring(fileUrl.lastIndexOf("/") + 1, fileUrl.lastIndexOf("."));
            Map result = cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
            return "ok".equals(result.get("result")); // ✅ Returns true if deletion was successful
        } catch (Exception e) {
            throw new RuntimeException("Failed to delete image: " + e.getMessage());
        }
    }
}
