package com.productservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.productservice.model.ProductEntity;

public interface ProductRepo extends MongoRepository<ProductEntity, Integer>  {
//	ProductEntity findByProductName(String productName);
//	public List< ProductEntity> findByCategory(String productCategory);
//	public List< ProductEntity> findByProductType(String productType);

}
