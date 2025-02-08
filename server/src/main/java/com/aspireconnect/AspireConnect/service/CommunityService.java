package com.aspireconnect.AspireConnect.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspireconnect.AspireConnect.model.Community;
import com.aspireconnect.AspireConnect.repository.CommunityRepo;

@Service
public class CommunityService {
    private final CommunityRepo communityRepo;

    @Autowired
    public CommunityService(CommunityRepo communityRepo) {
        this.communityRepo = communityRepo;
    }

    public void sendPost(Community entity) {

        communityRepo.save(entity); // ✅ Save to MongoDB
    }

    public List<Community> getAllPosts(String email) {
        return communityRepo.findAllExcludingEmails(email); // ✅ Retrieve all posts from MongoDB
    }

    public List<Community> getmyPosts(String email) {
        return communityRepo.findByEmail(email);
    }

    public String likeById(String id) {
        Optional<Community> community = communityRepo.findById(id);
        if (community.isPresent()) {
            community.get().setLike(community.get().getLike() + 1);
        }
        communityRepo.save(community.get());
        return id;

    }
}
