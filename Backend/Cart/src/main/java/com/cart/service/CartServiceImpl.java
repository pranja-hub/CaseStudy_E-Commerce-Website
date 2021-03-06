package com.cart.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cart.exception.ItemException;
import com.cart.model.CartEntity;
import com.cart.repository.CartRepo;
@Service
public class CartServiceImpl implements CartService{

	@Autowired
	private CartRepo cartRepo;
	
//	@Override
//	public CartEntity getCartByUserId(int id) {
//		return this.cartRepo.getCartByUserId(id);
//	}

	@Override
	public String deleteById(int id) {
		boolean isCartExist = cartRepo.existsById(id);
		if(isCartExist) {
			cartRepo.deleteById(id);
			return "Delete Cart details with id: " + id;
		}else {
			throw new ItemException("604","Can not delete as cart not found with this ID");
		}
	}

	@Override
	public CartEntity addCart(CartEntity cartEntity) {
		return this.cartRepo.save(cartEntity);
	}

	@Override
	public Optional<CartEntity> getCartByProductId(int id) {
		Optional<CartEntity> findById = cartRepo.findById(id);
		if(findById.isEmpty()) {
			throw new ItemException("602","Cart not found with this ID!");
		}else {
			return cartRepo.findById(id);			
		}
	}

	@Override
	public List<CartEntity> getAllCart() {
		List<CartEntity> cartEntities = cartRepo.findAll();
		if(cartEntities.isEmpty()) {
			throw new ItemException("603","Cart List is completely empty");
		}else {
			return cartRepo.findAll();			
		}
	}
}
