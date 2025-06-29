package com.aspireconnect.AspireConnect.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

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
    private String description;
    private List<String> followers; // List of User IDs

    // Default constructor
    public User() {
    }

    // Updated constructor with followers as a List of Strings
    public User(String id, String fname, String lname, String email, String password, String gender, String age,
                String role, String position, String exp, String sessions, String skills, String profile_pic,
                String compName, String compAddress, String stippend, String description, List<String> followers) {
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
        this.description = description;
        this.followers = followers; // Initialize followers as List
    }

    // Getters and Setters for all fields
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

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
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

    public String getProfile_pic() {
        return profile_pic;
    }

    public void setProfile_pic(String profile_pic) {
        this.profile_pic = profile_pic;
    }

    public String getCompName() {
        return compName;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // Getter and Setter for followers (List of User IDs)
    public List<String> getFollowers() {
        return followers;
    }

    public void setFollowers(List<String> followers) {
        this.followers = followers;
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
                ", followers=" + followers + // Include followers in toString for debugging
                '}';
    }
}
