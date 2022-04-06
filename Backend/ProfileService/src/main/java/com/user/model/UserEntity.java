package com.user.model;

import java.sql.Date;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "db")
public class UserEntity {
	@Id
	private int id;
	private String fullName;
	private String email;
	private Long mobileNumber;
	private String about;
	private int dateOfBirth;
	private String gender;
	private String role;
	private String password;


	public UserEntity(int i, String pranjal, String s, long l, String this_is_s, String female, String admin, String root) {
	}
}
