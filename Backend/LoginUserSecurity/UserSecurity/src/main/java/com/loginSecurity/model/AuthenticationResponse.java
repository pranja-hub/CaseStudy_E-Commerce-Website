package com.loginSecurity.model;


public class AuthenticationResponse {
	
	private String response;
	private String userId;
	
	
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public AuthenticationResponse() {
		
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public AuthenticationResponse(String response, String userId) {
		super();
		this.response = response;
		this.userId = userId;
	}
	

}
