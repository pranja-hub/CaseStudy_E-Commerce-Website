package com.loginSecurity.controller;

import java.util.List;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.loginSecurity.model.AuthenticationRequest;
import com.loginSecurity.model.AuthenticationResponse;
import com.loginSecurity.model.UserModel;
import com.loginSecurity.repository.UserRepository;
import com.loginSecurity.services.UserServices;
import com.loginSecurity.utils.JwtUtils;

@RestController
@CrossOrigin
public class AuthController {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserServices userServices;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@GetMapping("/dashboard")
	private String testingToken() {
		return "Welcome to DASHBOARD "+ SecurityContextHolder.getContext().getAuthentication().getName();
	}
	
	@GetMapping("/getallusers")
	private List<UserModel> getAllUser(){
		return userServices.getAllUser();
	}
	
	//to add new user
	@PostMapping("/subs")
	private ResponseEntity<?> subscribeClient(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
		String username=authenticationRequest.getUsername();
		String password=authenticationRequest.getPassword();
		UserModel userModel=new UserModel();
		userModel.setUsername(username);
		userModel.setPassword(new BCryptPasswordEncoder().encode(password));
		UserModel savedUser = new UserModel();
		try {
			 savedUser =  userServices.saveUser(userModel);
		}
		catch(Exception e) {
			throw new Exception("error",e);
		}
		return ResponseEntity.ok(new AuthenticationResponse("Successful subscription for client "+ username, savedUser.getId()));
		
	}
	
	//to authenticate existing user
	@PostMapping("/auth")
    private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
		String username=authenticationRequest.getUsername();
		String password=authenticationRequest.getPassword();
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		}
		catch(Exception e) {
			throw new Exception("invalid",e);

		}
		UserDetails loadeduser=userServices.loadUserByUsername(username);
		String generatedToken=jwtUtils.generateToken(loadeduser);
		
		String userId = userServices.loadUserIdByUsername(username);
		AuthenticationResponse response = new AuthenticationResponse(generatedToken,userId);
//		return new ResponseEntity<>(response,HttpStatus.OK);
		return ResponseEntity.ok(response);

	}
	

}
