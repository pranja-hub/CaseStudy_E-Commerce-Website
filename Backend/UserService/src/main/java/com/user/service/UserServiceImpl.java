package com.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.user.model.UserEntity;
import com.user.repo.UserRepo;

@Service
public class UserServiceImpl implements UserService {


	@Autowired
	private UserRepo profileRepo;
	
	@Autowired
	private RestTemplate restTemplate;
	
	@Override
	public List<UserEntity> getUsers() {
		List<UserEntity> profile = profileRepo.findAll();
		System.out.println(" " + profile);
		return profile;  
	}
	
	@Override
	public UserEntity getByProfileId(Integer id) {
		return this.profileRepo.findById(id).get();
	}

	@Override
	public void deleteProfile(Integer id) {
		this.profileRepo.deleteById(id);
	}

	@Override
	public UserEntity updateProfile(UserEntity userEntity) {
		return profileRepo.save(userEntity);
	}

	@Override
	public UserEntity addNewUser(UserEntity userEntity) {
		return profileRepo.save(userEntity);
	}

	@Override
	public UserEntity updateProfilebyId(Integer id) {
		return profileRepo.findById(id).get();
	}

	
}
