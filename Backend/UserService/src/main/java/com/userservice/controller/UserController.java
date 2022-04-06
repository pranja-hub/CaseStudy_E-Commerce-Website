package com.userservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.userservice.entity.UserProfile;
import com.userservice.repo.UserRepo;

@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserRepo userRepo;

	@PostMapping("/add")
	public ResponseEntity<?> getUserProfile(@RequestBody UserProfile userProfile) {
		UserProfile saveProfile = this.userRepo.save(userProfile);
		return ResponseEntity.ok(saveProfile);
	}
	
}
