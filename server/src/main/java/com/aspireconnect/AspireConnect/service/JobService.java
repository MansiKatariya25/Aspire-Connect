package com.aspireconnect.AspireConnect.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspireconnect.AspireConnect.model.AppliedUser;
import com.aspireconnect.AspireConnect.model.JobPost;
import com.aspireconnect.AspireConnect.repository.JobRepo;

@Service
public class JobService {
    @Autowired
    private JobRepo jobrepo;

    public JobPost sendJobPost(JobPost jobPost) {
        return jobrepo.save(jobPost);

    }

    public List<JobPost> getJobPost() {
        return jobrepo.findAll();
    }

    public String applyJob(String id, String applierid, String link) {
        JobPost jobPost = jobrepo.findById(id).orElse(null);

        // Step 2: Check if JobPost exists
        if (jobPost == null) {
            return "Job post not found";
        }

        // Step 3: Create AppliedUser object with the user's ID and resume URL (link)
        AppliedUser appliedUser = new AppliedUser(applierid, link);

        // Step 4: Check if appliedUsers is null, and initialize it if necessary
        if (jobPost.getAppliedUsers() == null) {
            jobPost.setAppliedUsers(new ArrayList<>());
        }

        // Step 5: Add the AppliedUser to the list of applied users
        jobPost.getAppliedUsers().add(appliedUser);

        // Step 6: Save the updated JobPost to the database
        jobrepo.save(jobPost);
        return "done";
    }

}
