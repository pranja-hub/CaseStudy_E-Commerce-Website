package com.user.service;

import java.util.List;

import com.user.model.UserEntity;

public interface UserService  {

	public UserEntity addNewUser(UserEntity userEntity);
	
	public UserEntity getByProfileId(Integer id);
	public UserEntity updateProfile(UserEntity userEntity);
	public UserEntity updateProfilebyId(Integer id);
	public void deleteProfile(Integer id);
	public List<UserEntity> getUsers();
}





//{
//    "id":11,
//    "fullName":"Prnajal",
//    "email":"pranjal@gmail.com",s
//    "mobileNumber":782746332,
//    "about": "this is a man",
//    "dateOfBirth": "2015-02-02",
//    "gender":"male",
//    "role":"user",
//    "password":"yri2",
//    "address":[
//        {
//        "houseNumber":22,
//        "streetName":"Rajendra Nagar",
//        "colonyname":"du",
//        "city":"Lucknow",
//        "state":"UP",
//        "pinCode":23
//    }]
//}