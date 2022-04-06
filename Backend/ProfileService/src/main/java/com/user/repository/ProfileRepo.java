package com.user.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.user.model.UserEntity;

@Repository
public interface ProfileRepo extends MongoRepository<UserEntity, Integer>{

	public UserEntity findAllByMobileNumber(Long id);
	public UserEntity findByFullName(String name);
}
