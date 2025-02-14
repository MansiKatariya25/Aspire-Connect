package com.aspireconnect.AspireConnect.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@Document(collection = "community")
public class Community {

    @Id
    private String id;
    @DBRef
    private User user;
    private String email;
    private List<String> likes; // Changed to a list of user IDs
    private String comment = "0"; // Default value
    private String share = "0"; // Default value
    private String content;
    private String image;

    // 🔥 No-Args Constructor (Required for Jackson Deserialization)
    public Community() {
    }

    // 🔥 All-Args Constructor with @JsonCreator for JSON Parsing
    @JsonCreator
    public Community(@JsonProperty("content") String content) {
        this.content = content;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<String> getLikes() {
        return likes;
    }

    public void setLikes(List<String> likes) {
        this.likes = likes;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getShare() {
        return share;
    }

    public void setShare(String share) {
        this.share = share;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
