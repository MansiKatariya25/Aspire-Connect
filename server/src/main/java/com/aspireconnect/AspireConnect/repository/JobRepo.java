package com.aspireconnect.AspireConnect.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.aspireconnect.AspireConnect.model.JobPost;

@Repository
public interface JobRepo extends MongoRepository<JobPost, String> {

}
