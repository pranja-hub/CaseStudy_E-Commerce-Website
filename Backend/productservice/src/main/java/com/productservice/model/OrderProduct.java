package com.productservice.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Orderproduct")
public class OrderProduct {
	private int productId;
	private String productName;
	
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	

}
