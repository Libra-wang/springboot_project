package com.aistar.service.impl;


import com.aistar.mapper.ProductMapper;
import com.aistar.pojo.Product;
import com.aistar.service.ProductService;


import com.aistar.util.MessageUtil;

import com.aistar.util.ServerResponse;
/*import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    public ServerResponse add(Product product) {
        int rows=productMapper.insert(product);
        if(rows==1)
            return ServerResponse.addSuccess();
        return ServerResponse.addFailed();
    }

    public ServerResponse update(Product product) {
        int rows=productMapper.updateByPrimaryKey(product);

        if(rows==1)
            return ServerResponse.updateSuccess();
        return ServerResponse.updateFailed();
    }



    public ServerResponse delete(String proId) {
        int rows=productMapper.deleteByPrimaryKey(proId);
        if(rows==1)
            return ServerResponse.deleteSuccess();
        return ServerResponse.deleteFailed();
    }

    public ServerResponse getById(String proId) {
        Product product=productMapper.selectByPrimaryKey(proId);
        if(product!=null)
            return ServerResponse.getDataSuccess(product);
        return ServerResponse.getDataFailed(MessageUtil.NO_DATA);
    }

    public ServerResponse getAll() {
        List<Product> productList=productMapper.selectByExample(null);
        if(productList!=null&&productList.size()>0)
            return ServerResponse.getDataSuccess(productList);
        return ServerResponse.getDataFailed(MessageUtil.NO_DATA);
    }


  /*  public ServerResponse getByPage(Integer pageNum) {
        Page<Product> page=PageHelper.startPage(pageNum,5);
        List<Product> productList=productMapper.selectByExample(null);
        PageInfo<Product> pageInfo=page.toPageInfo();
        if(productList!=null&&productList.size()>0)
            return ServerResponse.getDataSuccess(pageInfo);
        return ServerResponse.getDataFailed(MessageUtil.NO_DATA);
    }*/


}
