package com.productservice.service;

import java.util.List;
import java.util.Optional;

import com.productservice.model.ProductEntity;

public interface ProductService {
	public ProductEntity addProducts(ProductEntity productEntity); 
	public List<ProductEntity> getAllProduct();
	public Optional<ProductEntity> getProductById(int id);
//	public ProductEntity getProductByName(String name);
	public ProductEntity updateProduct(ProductEntity productEntity);
	public String updateProductById(ProductEntity productEntity, int id);
	public String deleteProductById(int id);
//	public List<ProductEntity> getProductByCategory(String category);
//	public List<ProductEntity> getproductByType(String type);
}
