package com.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

@RestController
@RequestMapping("/user")
public class UserController {

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
	      return userService.getUsers();
	   }

//	@GetMapping("/get")
//	public ResponseEntity<?> getUser() {
//		return ResponseEntity.ok(this.userService.getAllProfile());
//	}

//	@GetMapping("/get/{id}")
//	public ResponseEntity<?> getUserbyid(@PathVariable Integer id) {
//		return ResponseEntity.ok(this.userService.getByProfileId(id));
//	}

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


