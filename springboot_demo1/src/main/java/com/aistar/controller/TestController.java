package com.aistar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {
    @RequestMapping("/hello")
    @ResponseBody
    public String fun1(){
        System.out.println("spring controller");
        return "hello,springboot";
    }

    @RequestMapping
    public String fun2(){
        System.out.println("springboot index");
        return "index";
    }
}
