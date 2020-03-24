package com.aistar;

import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.aistar.mapper")
public class SpringbootDemo1Application {

    static Logger logger= LoggerFactory.getLogger(Logger.class);

    public static void main(String[] args) {
        logger.trace("trace.....");
        logger.debug("debug.....");
        logger.info("info.....");
        logger.warn("warn.....");
        logger.error("error.....");
        SpringApplication.run(SpringbootDemo1Application.class, args);
    }

}
