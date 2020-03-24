package com.aistar.controller;

import com.aistar.pojo.Product;
import com.aistar.service.ProductService;
import com.aistar.util.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class ProductRedisController {
    @Autowired
    @Qualifier("productServiceImpl")  //指明实现子类为redisService
    private ProductService productService;

    @PostMapping("/productRedis")
    @ResponseBody
    public ServerResponse save(Product product){
        ServerResponse serverResponse=productService.add(product);
        return serverResponse;
    }

    @GetMapping("/productRedis/{id}")
    @ResponseBody
    public ServerResponse getById(@PathVariable("id") String proId){
        ServerResponse serverResponse=productService.getById(proId);
        return serverResponse;
    }

    @PutMapping("/productRedis")
    @ResponseBody
    public ServerResponse update(Product product){
        ServerResponse serverResponse=productService.update(product);
        return serverResponse;
    }

    @DeleteMapping("/productRedis/delete/{id}")
    @ResponseBody
    public ServerResponse delete(@PathVariable("id") String proId){
        ServerResponse serverResponse=productService.delete(proId);
        return serverResponse;
    }
}
