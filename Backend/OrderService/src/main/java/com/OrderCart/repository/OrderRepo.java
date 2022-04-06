package com.OrderCart.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.OrderCart.model.OrderEntity;

public interface OrderRepo extends MongoRepository<OrderEntity, Integer> {

	
}
