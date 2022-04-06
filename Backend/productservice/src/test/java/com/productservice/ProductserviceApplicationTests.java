package com.productservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.productservice.model.ProductEntity;
import com.productservice.repository.ProductRepo;
import com.productservice.service.ProductService;

@RunWith(SpringRunner.class)
@SpringBootTest
class ProductserviceApplicationTests {

	@Autowired
	private ProductService productService;
	
	@MockBean
	private ProductRepo productRepo;
	
	@Test
	void contextLoads() {
	}
	
	@Test
	public void addProductTest() {
		ProductEntity product = new ProductEntity();
		when(productRepo.save(product)).thenReturn(product);
		assertEquals(product,productService.addProducts(product));
	}
	
	 @Test
	   public void updateProductTest() {
	      ProductEntity productEntity =  new ProductEntity();
	      productService.updateProduct(productEntity);
	      verify(productRepo,times(1)).save(productEntity);
	   }
	 
	   @Test
	   public void deleteProduct() {
	      Integer productID = 23;
	      productService.deleteProductById(productID);
	      verify(productRepo,times(1)).deleteById(productID);
	   }
	   
	   
	   
	
}
