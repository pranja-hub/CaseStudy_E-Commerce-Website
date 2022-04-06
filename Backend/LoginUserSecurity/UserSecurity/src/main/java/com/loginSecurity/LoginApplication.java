package com.loginSecurity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
@EnableEurekaClient
public class LoginApplication {

	public static void main(String[] args) {

		SpringApplication.run(LoginApplication.class, args);
		System.out.println("Welcome to runnable auth service is ...................");
	}

}
