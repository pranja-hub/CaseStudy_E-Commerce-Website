package com.productservice.exceptioncontroller;



import org.apache.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.productservice.customexception.ProductException;



@ControllerAdvice
public class MyControllerAdvice {
	
	@ExceptionHandler(ProductException.class)
	public ResponseEntity<String> handelEmptyInput(ProductException productExceptions){
		return new ResponseEntity<String>(productExceptions.getErrMess(), null, HttpStatus.SC_BAD_REQUEST);
	}
	
	

}
