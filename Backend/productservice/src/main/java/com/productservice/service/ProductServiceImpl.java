package com.productservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productservice.customexception.ProductException;
import com.productservice.model.ProductEntity;
import com.productservice.repository.ProductRepo;
@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepo productRepo;
	
	@Override
	public ProductEntity addProducts(ProductEntity productEntity) {
		return this.productRepo.save(productEntity);
		
	}

	@Override
	public List<ProductEntity> getAllProduct() {
		List<ProductEntity> productEntities = productRepo.findAll();
		if(productEntities.isEmpty()) {
			throw new ProductException("501", "Cart List is completely empty");
		}else {
			return productRepo.findAll();			
		}
	}

	@Override
	public Optional<ProductEntity> getProductById(int id) {
		Optional<ProductEntity> findById = productRepo.findById(id);
		if(findById.isEmpty()) {
			throw new ProductException("502","Product not found with this ID!");
		}else {
			return this.productRepo.findById(id);			
		}
	}


	@Override
	public ProductEntity updateProduct(ProductEntity productEntity) {
		return this.productRepo.save(productEntity);
	}

	@Override
	public String deleteProductById(int id) {
		boolean isProductExist = productRepo.existsById(id);
		if(isProductExist) {
			productRepo.deleteById(id);
			return "Delete Cart details with id: " + id;
		}else {
			throw new ProductException("503","Can not delete as product not found with this ID");
		}
		
	}

	@Override
	public String updateProductById(ProductEntity productEntity, int id) {
		boolean isProductExist = productRepo.existsById(id);
		if(isProductExist) {
			productRepo.save(productEntity);
			return "Update ProductDetails with id:" + id;
		}else {
			throw new ProductException("505","Can not update as cart not found with this ID");		
		}
	}

//	@Override
//	public List<ProductEntity> getProductByCategory(String category) {
//		List<ProductEntity> productEntity = this.productRepo.findByCategory(category);
//		return productEntity;
//	}

//	@Override
//	public List<ProductEntity> getproductByType(String type) {
//		List<ProductEntity> productEntity = this.productRepo.findByProductType(type);
//		return productEntity;
//	}

}
