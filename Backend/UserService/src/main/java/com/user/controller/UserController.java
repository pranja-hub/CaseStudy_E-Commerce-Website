package com.user.controller;

import java.util.List;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.user.model.UserEntity;
import com.user.service.UserService;

@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {

	final Logger logger= LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserService userService;
	
	@Autowired
	private RestTemplate restTemplate;

	@PostMapping("/add")
	public UserEntity addUser(@RequestBody UserEntity userEntity) {
		return this.userService.addNewUser(userEntity);
	}
	
	 @GetMapping("/get")
	   public List<UserEntity> findAllUsers() {
			 logger.info("Inside User of UserEntityController");
		return userService.getUsers();
	   }

	@GetMapping("/get/{id}")
	public ResponseEntity<?> getUserbyid(@PathVariable Integer id) {
		return ResponseEntity.ok(this.userService.getByProfileId(id));
	}

	@PutMapping("/update")
	public UserEntity updateUser(@RequestBody UserEntity userEntity) {
		return this.userService.updateProfile(userEntity);
	}


	@DeleteMapping("/del/{id}")
	public int deleteUser(@PathVariable Integer id) {
		this.userService.deleteProfile(id);
		return id;
	}
	
	
	
}


