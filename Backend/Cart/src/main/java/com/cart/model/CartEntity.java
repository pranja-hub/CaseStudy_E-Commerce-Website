package com.cart.model;

import javax.validation.constraints.NotEmpty;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Document(collection = "Cart")
public class CartEntity {

	@Id
	@NotEmpty
	private String cartId;
	@NotEmpty
	private int productId;
	@NotEmpty
	private String productName;
	private int userId;
	private int quantity;
	private int price;


	public String getCartId() {
		return cartId;
	}
	public void setCartId(String cartId) {
		this.cartId = cartId;
	}
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
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	public CartEntity(String cartId, int productId, String productName, int userId, int quantity, int price) {
		super();
		this.cartId = cartId;
		this.productId = productId;
		this.productName = productName;
		this.userId = userId;
		this.quantity = quantity;
		this.price = price;
	}
	public CartEntity() {
		super();
	}

}
