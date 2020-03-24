package com.aistar.service.redisimpl;

import com.aistar.mapper.ProductMapper;
import com.aistar.pojo.Product;
import com.aistar.service.ProductService;
import com.aistar.util.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;
import redis.clients.jedis.Jedis;

import javax.annotation.Resource;

@Service
public class ProductServiceRedisImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;
    @Resource
    RedisTemplate redisTemplate;

    @Override
    public ServerResponse add(Product product) {
        int rows=productMapper.insert(product);
        if(rows>0)
            return ServerResponse.addSuccess();
        return ServerResponse.addFailed();
    }

    @Override
    public ServerResponse update(Product product) {
        //修改数据库中的数据
        int rows=productMapper.updateByPrimaryKeySelective(product);
        //查询redis缓存中是否包含该主键，若包含，重新将该product对象保存到redis缓存中
        //若缓存redis中不包含该主键，不执行任何操作
        ValueOperations operations=redisTemplate.opsForValue();
        //缓存存在
        String key="product_"+product.getProId();
        if(redisTemplate.hasKey(key)){
            //更新缓存
            Product pro=productMapper.selectByPrimaryKey(product.getProId());
            operations.set(key,pro);
            System.out.println("===缓存中修改===");
        }
        if(rows>0)
            return ServerResponse.updateSuccess();

        return ServerResponse.updateFailed();
    }

    @Override
    public ServerResponse delete(String proId) {
        Product product=productMapper.selectByPrimaryKey(proId);
        int rows=productMapper.deleteByPrimaryKey(proId);
        //缓存存在
        String key="product_"+product.getProId();
        if(redisTemplate.hasKey(key)){
            //删除对应缓存
            redisTemplate.delete(key);
            System.out.println("===缓存删除成功===");
        }
        if(rows>0)
            return ServerResponse.deleteSuccess();
        return ServerResponse.deleteFailed();
    }

    @Override
    public ServerResponse getById(String proId) {
       String key="product_"+proId;
       ValueOperations<String,Product> operations=redisTemplate.opsForValue();
        //1.先查看缓存中redis,是否包含主键
        //如果缓存存在
        //（1）若包含主键，则到redis中查询该数据，
        //若查询到数据product 返回客户端，若没有返回对象，查询失败，到mysql中查询
        if(redisTemplate.hasKey(key)){
            Product product=operations.get(key);
            System.out.println("===从缓存中获得===");
            if(product!=null)
                return ServerResponse.getDataSuccess(product);
            else
                return ServerResponse.getDataFailed("暂无数据");
        }else {//如果缓存不存在
            Product product=productMapper.selectByPrimaryKey(proId);
            System.out.println("===从数据库中获得===");
            if(product!=null){
                operations.set(key,product);
                return ServerResponse.getDataSuccess(product);
            }else{
                return ServerResponse.getDataFailed("暂无数据");
            }
        }
    }

    @Override
    public ServerResponse getAll() {
        return null;
    }
}
