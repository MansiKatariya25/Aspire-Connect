package com.aspireconnect.AspireConnect.model;

public class AppliedUser {
    private String userId;
    private String resumeUrl;

    public AppliedUser(String userId, String resumeUrl) {
        this.userId = userId;
        this.resumeUrl = resumeUrl;
    }

    // Getters and Setters
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getResumeUrl() {
        return resumeUrl;
    }

    public void setResumeUrl(String resumeUrl) {
        this.resumeUrl = resumeUrl;
    }
}
