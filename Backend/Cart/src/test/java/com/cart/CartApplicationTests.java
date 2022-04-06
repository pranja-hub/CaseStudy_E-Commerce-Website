package com.cart;

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

import com.cart.model.CartEntity;
import com.cart.repository.CartRepo;
import com.cart.service.CartService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CartApplicationTests {

	 @Autowired
	 private CartService cartService;
	 
	 @MockBean
	 private CartRepo cartRepo;
	 
		
//	 @Test
//	 public void addCartTest() {
//		 CartEntity card = new CartEntity("1", 3, "Mobile", 1, 1, 1);
//		 when(cartRepo.save(card)).thenReturn(card);
//		 assertEquals(card,cartService.addCart(card));
//
//	 }
//
//	 @Test
//	    public void getCartTest() {
//	      when(cartRepo.findAll()).thenReturn(Stream.of(new CartEntity("1", 3, "mobile", 1, 1, 1)).collect(Collectors.toList()));
//	      assertEquals(1,cartService.getAllCart().size());
//	   }
//	 
//	 @Test
//	   public void update() {
//	      CartEntity updateCard =  new CartEntity();
//	      cartRepo.save(updateCard);
//	      verify(cartRepo,times(1)).save(updateCard);
//	   }
//	 
//	 @Test
//	   public void deleteCart() {
//	      Integer cardId = 2;
//	      cartService.deleteById(cardId);
//	      verify(cartRepo,times(1)).deleteById(cardId);
//	   }
	 
}

