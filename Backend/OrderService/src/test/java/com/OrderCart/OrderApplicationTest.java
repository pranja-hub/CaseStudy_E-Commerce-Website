package com.OrderCart;

import com.OrderCart.model.OrderEntity;
import com.OrderCart.repository.OrderRepo;
import com.OrderCart.service.OrderService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
public class OrderApplicationTest {

    @Autowired
    private OrderService orderService;

    @MockBean
    private OrderRepo orderRepo;

    @Test
    public void addOrderTest() {
        OrderEntity order = new OrderEntity(1, 2, 1, 34.0, "Success", "s", 1);
        when(orderRepo.save(order)).thenReturn(order);
        assertEquals(order, orderService.addOrder(order));
    }

    @Test
    public void getOrderTest() {
        when(orderRepo.findAll()).thenReturn(Stream.of(new OrderEntity()).collect(Collectors.toList()));
        assertEquals(1,orderService.getAllOrders().size());
    }
}
