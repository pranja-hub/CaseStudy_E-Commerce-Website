package com.productservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Products")
public class ProductEntity {
	@Id
	private int productID;
	private String productType;
	private String productCategory;
	private String productName;
	private int rating;
	private String review;
	private Double price;
	private String description;
	private String specification;

	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	
	public String getSpecification() {
		return specification;
	}
	public void setSpecification(String specification) {
		this.specification = specification;
	}
	
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}
	
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public int getProductID() {
		return productID;
	}
	public void setProductID(int productID) {
		this.productID = productID;
	}
	public String getProductCategory() {
		return productCategory;
	}
	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public ProductEntity(int productID, String productType, String productCategory, String productName, int rating,
			String review, Double price, String description, String specification) {
		super();
		this.productID = productID;
		this.productType = productType;
		this.productCategory = productCategory;
		this.productName = productName;
		this.rating = rating;
		this.review = review;
		this.price = price;
		this.description = description;
		this.specification = specification;
	}
	public ProductEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
