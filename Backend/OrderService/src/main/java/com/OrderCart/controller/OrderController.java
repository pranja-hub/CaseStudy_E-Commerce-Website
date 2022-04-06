package com.OrderCart.controller;

import java.util.List;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.OrderCart.model.OrderEntity;
import com.OrderCart.service.OrderService;
import com.mongodb.diagnostics.logging.Logger;

//@Slf4j
@RestController
@RequestMapping("/order")
@OpenAPIDefinition
public class OrderController {

//	final Logger logger = (Logger) LoggerFactory.getLogger(OrderController.class);

	@Autowired
	private OrderService orderService;
	
	
	@PostMapping("/addorder")
	public OrderEntity addOrder(OrderEntity orderEntity) {
		return this.orderService.addOrder(orderEntity);
	}
	
	@GetMapping("/getorder")
	public List<OrderEntity> findAllorder() {
//		logger.info("Inside Order of OrderController");
		return orderService.getAllOrders();
	}
	
	@GetMapping("/{id}")
	public OrderEntity getOrderById(@PathVariable int id) {
		return this.orderService.getOrderById(id);
	}
	
	@GetMapping("/ordercustid/{id}")
	public OrderEntity getOrderByCustomerId(@PathVariable int id) {
		return this.orderService.getOrderByCustomerId(id);
	}
	
	@GetMapping("/address/{id}")
	public OrderEntity getAddressByCustomerId(@PathVariable int id) {
		return this.orderService.getAddressByCustomerId(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public int deleteOrderById(@PathVariable int id) {
		this.orderService.deleteOrder(id);
		return id;
	}
	
	
	
	
}
