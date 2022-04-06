package com.loginSecurity.repository;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.loginSecurity.model.UserModel;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {
	
	UserModel findByUsername(String username);
	List<UserModel> findAll();
}
