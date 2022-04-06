package com.cart.service;

import java.util.List;
import java.util.Optional;

import com.cart.model.CartEntity;

public interface CartService {
	public CartEntity addCart(CartEntity cartEntity);
//	public CartEntity getCartByUserId(int id);
	public String deleteById(int id);
	public Optional<CartEntity> getCartByProductId(int id);
	public List<CartEntity> getAllCart();
}
