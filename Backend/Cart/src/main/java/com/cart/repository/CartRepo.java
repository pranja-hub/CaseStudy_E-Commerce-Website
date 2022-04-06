package com.cart.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cart.model.CartEntity;

public interface CartRepo extends MongoRepository<CartEntity, Integer>{
	public CartEntity getCartByUserId(int id);
}
