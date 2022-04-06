package com.Login.controller;
import com.Login.model.AuthenticationRequest;
import com.Login.model.AuthenticationResponse;
import com.Login.model.UserModel;
import com.Login.repository.UserRepository;
import com.Login.services.UserServices;
import com.Login.utils.JwtUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

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
	
	//to add new user
	@PostMapping("/subs")
	private ResponseEntity<?> subscribeClient(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
		String username=authenticationRequest.getUsername();
		String password=authenticationRequest.getPassword();
		String role=authenticationRequest.getRole();
		UserModel userModel=new UserModel();
		userModel.setUsername(username);
		userModel.setPassword(new BCryptPasswordEncoder().encode(password));
		userModel.setRole(role);
		try {
			userRepository.save(userModel);
		}
		catch(Exception e) {
			throw new Exception("Invalid",e);
		}
		return ResponseEntity.ok(new AuthenticationResponse("Successful subscription for client "+ username));
		
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
			throw new Exception("Invalid",e);



		}
		UserDetails loadeduser=userServices.loadUserByUsername(username);
		String generatedToken=jwtUtils.generateToken(loadeduser);
		
		return ResponseEntity.ok(new AuthenticationResponse(generatedToken,loadeduser.getAuthorities().toString()));

	}
	

}
