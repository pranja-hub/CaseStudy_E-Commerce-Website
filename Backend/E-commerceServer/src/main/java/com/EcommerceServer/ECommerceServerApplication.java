package com.EcommerceServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class ECommerceServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ECommerceServerApplication.class, args);
		System.out.println("Welcome to E-commerce Server");
	}

}
