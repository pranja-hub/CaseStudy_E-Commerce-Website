package com.loginSecurity.services;

import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.loginSecurity.model.UserModel;
import com.loginSecurity.repository.UserRepository;

@Service
public class UserServices implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserModel userfound = userRepository.findByUsername(username);
		if (userfound == null) {
			return null;
		}

		String name = userfound.getUsername();
		String pswd = userfound.getPassword();

		return new User(name, pswd, new ArrayList<>());
	}

	public List<UserModel> getAllUser() {
		List<UserModel> users = new ArrayList<>();
		userRepository.findAll().forEach(users::add);
		return users;
	}

	public UserModel saveUser(UserModel userModel) {
		return userRepository.save(userModel);
	}

	public String loadUserIdByUsername(String username) throws UsernameNotFoundException {
		UserModel userfound = userRepository.findByUsername(username);
		if (userfound == null) {
			return null;
		}

		String userId = userfound.getId();

		return userId;
	}
}
