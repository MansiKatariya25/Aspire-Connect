package com.aspireconnect.AspireConnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspireconnect.AspireConnect.model.JobPost;
import com.aspireconnect.AspireConnect.repository.JobRepo;

@Service
public class JobService {
    @Autowired
    private JobRepo jobrepo;

    public JobPost sendJobPost(JobPost jobPost) {
        return jobrepo.save(jobPost);

    }

    public List<JobPost> getJobPost(){
        return jobrepo.findAll();
    }

}
