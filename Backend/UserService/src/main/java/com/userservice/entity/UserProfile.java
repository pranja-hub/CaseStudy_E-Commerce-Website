package com.userservice.entity;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "user_details")
public class UserProfile {
	@Id
	private int profileId;
	private String fullNAame;
	private String image;
	private String emailId;
	private Long mobileNumber;
	private String about;
	private LocalDate dateOfBirth;
	private String gender;
	private String role;
	private String password;

	public int getProfileId() {
		return profileId;
	}

	public void setProfileId(int profileId) {
		this.profileId = profileId;
	}

	public String getFullNAame() {
		return fullNAame;
	}

	public void setFullNAame(String fullNAame) {
		this.fullNAame = fullNAame;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public UserProfile(int profileId, String fullNAame, String image, String emailId, Long mobileNumber, String about,
			LocalDate dateOfBirth, String gender, String role, String password) {
		super();
		this.profileId = profileId;
		this.fullNAame = fullNAame;
		this.image = image;
		this.emailId = emailId;
		this.mobileNumber = mobileNumber;
		this.about = about;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.role = role;
		this.password = password;
	}

	public UserProfile() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "UserProfile [profileId=" + profileId + ", fullNAame=" + fullNAame + ", image=" + image + ", emailId="
				+ emailId + ", mobileNumber=" + mobileNumber + ", about=" + about + ", gender=" + gender + ", role="
				+ role + ", password=" + password + "]";
	}

}
