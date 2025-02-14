package com.aspireconnect.AspireConnect.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "JobPost")
public class JobPost {
    private String postedby;
    private String jobType;
    private String jobLocation;
    private String Stipend;
    private String jobDescription;
    private String jobPosition;
    private String jobSkills;
    private String jobPerks;
    private String jobDuration;
    private String openings;
    private String otherRequirement;
    private List<String> appliedUsers;
    @DBRef
    private User user;

    public JobPost(String postedby, String jobType, String jobLocation, String Stipend, String jobDescription,
            String jobPosition, String jobSkills, String jobPerks, String jobDuration, String openings,
            String otherRequirement, User user, List<String> appliedUsers) {
        this.postedby = postedby;
        this.jobType = jobType;
        this.jobLocation = jobLocation;
        this.Stipend = Stipend;
        this.jobDescription = jobDescription;
        this.jobPosition = jobPosition;
        this.jobSkills = jobSkills;
        this.jobPerks = jobPerks;
        this.jobDuration = jobDuration;
        this.openings = openings;
        this.otherRequirement = otherRequirement;
        this.user = user;
        this.appliedUsers = appliedUsers;
    }

    public List<String> getAppliedUsers() {
        return appliedUsers;
    }

    public void setAppliedUsers(List<String> appliedUsers) {
        this.appliedUsers = appliedUsers;
    }

    public String getPostedby() {
        return postedby;
    }

    public void setPostedby(String postedby) {
        this.postedby = postedby;
    }

    public String getJobType() {
        return jobType;
    }

    public void setJobType(String jobType) {
        this.jobType = jobType;
    }

    public String getJobLocation() {
        return jobLocation;
    }

    public void setJobLocation(String jobLocation) {
        this.jobLocation = jobLocation;
    }

    public String getStipend() {
        return Stipend;
    }

    public void setStipend(String Stipend) {
        this.Stipend = Stipend;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public String getJobPosition() {
        return jobPosition;
    }

    public void setJobPosition(String jobPosition) {
        this.jobPosition = jobPosition;
    }

    public String getJobSkills() {
        return jobSkills;
    }

    public void setJobSkills(String jobSkills) {
        this.jobSkills = jobSkills;
    }

    public String getJobPerks() {
        return jobPerks;
    }

    public void setJobPerks(String jobPerks) {
        this.jobPerks = jobPerks;
    }

    public String getJobDuration() {
        return jobDuration;
    }

    public void setJobDuration(String jobDuration) {
        this.jobDuration = jobDuration;
    }

    public String getOpenings() {
        return openings;
    }

    public void setOpenings(String openings) {
        this.openings = openings;
    }

    public String getOtherRequirement() {
        return otherRequirement;
    }

    public void setOtherRequirement(String otherRequirement) {
        this.otherRequirement = otherRequirement;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
