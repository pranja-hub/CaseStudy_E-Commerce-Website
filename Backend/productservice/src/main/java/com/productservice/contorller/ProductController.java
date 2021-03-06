package com.productservice.contorller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.productservice.model.ProductEntity;
import com.productservice.service.ProductService;

@RestController
@CrossOrigin()
@RequestMapping("/product")
public class ProductController {


	@Autowired
	private ProductService productService;
	
	@PostMapping("/add")
	public ProductEntity addProduct(@RequestBody ProductEntity productEntity) {
		return this.productService.addProducts(productEntity);
	}

	@GetMapping("/get")
	public ResponseEntity<?> getProduct() {
		return ResponseEntity.ok(this.productService.getAllProduct());
	}
	
	@GetMapping("/get/{id}")
	public Optional<ProductEntity> getProductById(@PathVariable int id) {
		return this.productService.getProductById(id);
	}
	
	@PutMapping("/update")
	public ProductEntity updateProduct(@RequestBody ProductEntity productEntity) {
		return this.productService.updateProduct(productEntity);
	}
	
	@PutMapping("/update/{id}")
	public String updateProductById(@RequestBody ProductEntity productEntity, @PathVariable("id") int pid) {
				this.productService.updateProductById(productEntity, pid);
				return "update Cart with ID :" + pid;
	}

	@DeleteMapping("/del/{id}")
	public String deleteUser(@PathVariable("id") int id) {
		this.productService.deleteProductById(id);
		return "Delete Product with ID: " + id;

	}
}
