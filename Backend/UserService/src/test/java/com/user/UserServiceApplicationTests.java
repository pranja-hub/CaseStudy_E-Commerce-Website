package com.user;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.user.model.UserEntity;
import com.user.repo.UserRepo;
import com.user.service.UserService;


@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceApplicationTests {

	@Autowired
	private UserService userService;

	@MockBean
	private  UserRepo profileRepo;

//	@Test
//	public void getUsersTest() {
//		when(profileRepo.findAll()).thenReturn(Stream.of(new UserEntity(1, "Pranjal", "pranjal@gmail.com", 734646648L, "this is s", "female", "admin", "root")).collect(Collectors.toList()));
//		assertEquals(1, userService.getUsers().size());
//	}

	@Test
	public void addUserTest() {
		UserEntity user = new UserEntity(1, "Pranjal", "pranjal@gmail.com",23344L,"df", 2, "male","user","wee");
		when(profileRepo.save(user)).thenReturn(user);
		assertEquals(user, userService.addNewUser(user));
	}



//	@Test
//	public void updateTest() {
//		UserEntity user =  new UserEntity();
//		userService.updateProfile(user);
//		verify(profileRepo,times(1)).save(user);
//	}

//	@Test
//	public void getByIdTest() {
//		Integer userID = 2;
//		userService.getByProfileId(userID);
//		verify(profileRepo,times(1)).findById(userID);
//	}

	@Test
	public void deleteByIdTest() {
		Integer userID = 23;
		userService.deleteProfile(userID);
		verify(profileRepo,times(1)).deleteById(userID);
	}

}