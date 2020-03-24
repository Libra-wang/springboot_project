package com.aistar.controller;

import com.aistar.service.ProductService;
import com.aistar.util.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MemberController {

    @Autowired
    private ProductService productService;

    @GetMapping("/product/{id}")
    @ResponseBody
    public ServerResponse getById(@PathVariable("id")String proId){
        return productService.getById(proId);
    }
}
