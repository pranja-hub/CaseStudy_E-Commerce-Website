package com.cart.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cart.model.CartEntity;
import com.cart.service.CartService;

@CrossOrigin("*")
@RestController
@RequestMapping("/cart")
public class CartController  {

	Logger logger= LoggerFactory.getLogger(CartController.class);
	
	@Autowired
	private CartService cartService;
	
	@PostMapping("/add")
	public CartEntity addCartById(@RequestBody CartEntity cartEntity) {
		return this.cartService.addCart(cartEntity);
	}
	
	@GetMapping("/get")
	public List<CartEntity> findAllCart(){
		return this.cartService.getAllCart();
	}
	
//	@GetMapping("/get/user/{userid}")
//	public CartEntity getCartByUserId(@PathVariable("userid") int userId) {
//		return this.cartService.getCartByUserId(userId);
//	}
	
	@GetMapping("/get/{id}")
	public Optional<CartEntity> getCartById(@PathVariable("id") int id) {
		logger.error("error22");
		return this.cartService.getCartByProductId(id);
	}
	
	@DeleteMapping("/del/{id}")
	public int deleteById(@PathVariable("id") int id) {
	this.cartService.deleteById(id);
	return id;
}
}