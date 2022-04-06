package com.cart.contoller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.client.RestTemplate;

import com.cart.controller.CartController;
import com.cart.model.CartEntity;
import com.cart.service.CartServiceImpl;

@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest(classes = { ControllerTest.class })
class ControllerTest {

	 @InjectMocks
	    private CartController controller;
	    @Mock
	    private CartServiceImpl cartServiceImpl;
	    @Mock
	    private RestTemplate restTemplate;
	    
	    @Test
	    void addCart() {
	        CartEntity cartEntity = new CartEntity();
	        when(cartServiceImpl.addCart(cartEntity)).thenReturn(cartEntity);
	        assertEquals(cartEntity,controller.addCartById(cartEntity));
	    }
	    
//	    @Test
//	    void deleteCart() {
//	    	CartEntity cartEntity = new CartEntity();
//	        cartEntity.setProductId(2);
//	        controller.deleteById(2);
//	        verify(cartServiceImpl,times(1)).deleteById(3);
//	    }

	    @Test
	    void findAllCart() {
	    	List <CartEntity> cartEntity = new ArrayList<>();
//	    	CartEntity cartEntity = new CartEntity();
	        when(cartServiceImpl.getAllCart()).thenReturn(cartEntity);
	        assertEquals(cartEntity.size(), controller.findAllCart().size());
	    }
	    
	    @Test
	    void findById() {
	    	List<CartEntity> cartEntities = new ArrayList<>();
	    	
//	    	CartEntity cartEntity = new CartEntity();
//	    	cartEntity.setCartId(2);
//	    	controller.getCartById(2);
//	    	verify(cartServiceImpl, times(1)).getCartByProductId(2);
	    }

}
