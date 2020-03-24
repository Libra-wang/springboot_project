package com.aistar.service;

import com.aistar.pojo.Product;
import com.aistar.util.ServerResponse;

public interface ProductService {
    public ServerResponse add(Product product);
    public ServerResponse update(Product product);
    public ServerResponse delete(String proId);
    public ServerResponse getById(String proId);
    public ServerResponse getAll();
    /*public ServerResponse getByPage(Integer pageNum);*/


}
