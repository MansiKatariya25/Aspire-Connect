package com.aspireconnect.AspireConnect.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspireconnect.AspireConnect.model.Community;
import com.aspireconnect.AspireConnect.model.User;
import com.aspireconnect.AspireConnect.repository.CommunityRepo;
import com.aspireconnect.AspireConnect.repository.UserRepo;

@Service
public class CommunityService {
    private final CommunityRepo communityRepo;
    private final UserRepo userRepo;

    @Autowired
    public CommunityService(CommunityRepo communityRepo, UserRepo userRepo) {
        this.communityRepo = communityRepo;
        this.userRepo = userRepo;
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

    public String likeById(String communityId, String email) {
        try {
            // Fetch the community post by ID
            Optional<Community> communityOptional = communityRepo.findById(communityId);

            // Fetch the user by email to get the userId
            Optional<User> userOptional = userRepo.findByEmail(email);

            // Check if the community post and user exist
            if (communityOptional.isPresent() && userOptional.isPresent()) {
                Community community = communityOptional.get();
                User user = userOptional.get();
                List<String> likes = community.getLikes(); // Get the list of user IDs who have liked the post

                // If the likes list is null, initialize it as an empty list
                if (likes == null) {
                    likes = new ArrayList<>();
                }

                String userId = user.getId(); // Get the ID of the user performing the action

                // Check if the user has already liked the post
                if (likes.contains(userId)) {
                    // User has already liked, so remove their like (unlike)
                    likes.remove(userId);
                    community.setLikes(likes); // Update the likes list
                    communityRepo.save(community); // Save the updated community post
                    return "unliked"; // Successfully unliked the post
                } else {
                    // User hasn't liked yet, so add their like
                    likes.add(userId);
                    community.setLikes(likes); // Update the likes list
                    communityRepo.save(community); // Save the updated community post
                    return "liked"; // Successfully liked the post
                }
            } else {
                // Either the community post or the user doesn't exist
                return "community_or_user_not_found";
            }
        } catch (Exception e) {
            System.err.println(e);
            return "failed"; // Some error occurred
        }
    }

    public String followById(String id, String email) {
        try {
            // Find the user who is being followed/unfollowed by their id
            Optional<User> userToFollowOptional = userRepo.findById(id);
            // Find the current user by email (who is following/unfollowing)
            Optional<User> currentUserOptional = userRepo.findByEmail(email);

            // Check if both users exist
            if (userToFollowOptional.isPresent() && currentUserOptional.isPresent()) {
                User userToFollow = userToFollowOptional.get();
                User currentUser = currentUserOptional.get();

                // Get the current list of followers for the user being followed/unfollowed
                List<String> followers = userToFollow.getFollowers();

                // Check if the current user is already in the followers list
                if (followers.contains(currentUser.getId())) {
                    // If already following, remove the current user's ID (unfollow)
                    followers.remove(currentUser.getId());

                    // Set the updated followers list
                    userToFollow.setFollowers(followers);

                    // Save the updated userToFollow (the user being followed/unfollowed)
                    userRepo.save(userToFollow);

                    return "unfollowed"; // Successfully unfollowed the user
                } else {
                    // If not following, add the current user's ID (follow)
                    followers.add(currentUser.getId());

                    // Set the updated followers list
                    userToFollow.setFollowers(followers);

                    // Save the updated userToFollow (the user being followed)
                    userRepo.save(userToFollow);

                    return "success"; // Successfully followed the user
                }
            } else {
                return "user_not_found"; // One of the users was not found
            }
        } catch (Exception e) {
            return "failed"; // Some error occurred
        }
    }

}
