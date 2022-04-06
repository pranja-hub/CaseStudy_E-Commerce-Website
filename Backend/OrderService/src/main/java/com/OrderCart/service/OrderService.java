package com.OrderCart.service;

import java.util.List;

import com.OrderCart.model.OrderEntity;

public interface OrderService {
	public OrderEntity addOrder(OrderEntity orderEntity);
	public List<OrderEntity> getAllOrders();
	public void deleteOrder(int orderId);
	public OrderEntity getOrderByCustomerId(int customerId);
	public OrderEntity getAddressByCustomerId(int customerId);
	public OrderEntity getOrderById(int orderId);
}
