package com.userservice.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import com.userservice.entity.UserProfile;
@Service
public interface UserRepo extends MongoRepository<UserProfile, Integer>{

}
