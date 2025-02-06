package com.aspireconnect.AspireConnect.model;

import java.lang.reflect.Array;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    @Id
    private String id; // MongoDB's primary key
    private String fname;
    private String lname;
    private String email;
    private String password;
    private String gender;
    private String age;
    private String role;
    private String position;
    private String exp;
    private String sessions;
    private String skills;
    private String profile_pic;
    private String compName;
    private String compAddress;
    private String stippend;
    private String jobType;
    private String jobDescription;
    private String description;
    private String jobPosition;
    private String jobLocation;
    private String jobSkills;
    private String jobPerks;
    private String jobDuration;
    private String openings;
    private String otherRequirement;
    private String followers;
    private List<JobPost> jobPosts;

    // Default constructor
    public User() {
    }

    public List<JobPost> getJobPosts() {
        return jobPosts;
    }

    public void setJobPosts(List<JobPost> jobPosts) {
        this.jobPosts = jobPosts;
    }

    
    

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public User(String id, String fname, String lname, String email, String password, String gender, String age,
            String role, String position, String exp, String sessions, String skills, String profile_pic,
            String compName, String compAddress, String stippend, String jobType, String jobDescription,
            String description, String jobPosition, String jobLocation, String jobSkills, String jobPerks,
            String jobDuration,String openings, String otherRequirement, String followers, List<JobPost> jobPosts) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.age = age;
        this.role = role;
        this.position = position;
        this.exp = exp;
        this.sessions = sessions;
        this.skills = skills;
        this.profile_pic = profile_pic;
        this.compName = compName;
        this.compAddress = compAddress;
        this.stippend = stippend;
        this.jobType = jobType;
        this.jobDescription = jobDescription;
        this.description = description;
        this.jobPosition = jobPosition;
        this.jobLocation = jobLocation;
        this.jobSkills = jobSkills;
        this.jobPerks = jobPerks;
        this.jobDuration = jobDuration;
        this.openings = openings;
        this.otherRequirement = otherRequirement;
        this.followers = followers;
        this.jobPosts = jobPosts;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getCompName() {
        return compName;
    }

    public String getFollowers() {
        return followers;
    }

    public void setFollowers(String followers) {
        this.followers = followers;
    }

    public void setCompName(String compName) {
        this.compName = compName;
    }

    public String getCompAddress() {
        return compAddress;
    }

    public void setCompAddress(String compAddress) {
        this.compAddress = compAddress;
    }

    public String getStippend() {
        return stippend;
    }

    public void setStippend(String stippend) {
        this.stippend = stippend;
    }

    public String getJobType() {
        return jobType;
    }

    public void setJobType(String jobType) {
        this.jobType = jobType;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public String getExp() {
        return exp;
    }

    public void setExp(String exp) {
        this.exp = exp;
    }

    public String getSessions() {
        return sessions;
    }

    public void setSessions(String sessions) {
        this.sessions = sessions;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getJobPosition() {
        return jobPosition;
    }

    public void setJobPosition(String jobPosition) {
        this.jobPosition = jobPosition;
    }

    public String getJobLocation() {
        return jobLocation;
    }

    public void setJobLocation(String jobLocation) {
        this.jobLocation = jobLocation;
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

    public String getOtherRequirement() {
        return otherRequirement;
    }

    public void setOtherRequirement(String otherRequirement) {
        this.otherRequirement = otherRequirement;
    }

    public String getOpenings() {
        return openings;
    }

    public void setOpenings(String openings) {
        this.openings = openings;
    }


    // toString method (optional, for debugging/logging purposes)
    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public String getProfile_pic() {
        return profile_pic;
    }

    public void setProfile_pic(String profile_pic) {
        this.profile_pic = profile_pic;
    }
}
