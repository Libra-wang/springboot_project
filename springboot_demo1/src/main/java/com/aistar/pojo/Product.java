package com.aistar.pojo;

import java.util.Date;

public class Product {
    private String proId;
    private String proName;
    private Long proNum;
    private Float proPrice;
    private String proAddress;
    private String proColor;
    private Float proSize;
    private Date proDate;

    public Product(){}

    public Product(String proId, String proName, Long proNum, Float proPrice, String proAddress, String proColor, Float proSize, Date proDate) {
        this.proId = proId;
        this.proName = proName;
        this.proNum = proNum;
        this.proPrice = proPrice;
        this.proAddress = proAddress;
        this.proColor = proColor;
        this.proSize = proSize;
        this.proDate = proDate;
    }

    public Product(String proName, Long proNum, Float proPrice, String proAddress, String proColor, Float proSize, Date proDate) {
    }

    public String getProId() {
        return proId;
    }

    public void setProId(String proId) {
        this.proId = proId;
    }

    public String getProName() {
        return proName;
    }

    public void setProName(String proName) {
        this.proName = proName;
    }

    public Long getProNum() {
        return proNum;
    }

    public void setProNum(Long proNum) {
        this.proNum = proNum;
    }

    public Float getProPrice() {
        return proPrice;
    }

    public void setProPrice(Float proPrice) {
        this.proPrice = proPrice;
    }

    public String getProAddress() {
        return proAddress;
    }

    public void setProAddress(String proAddress) {
        this.proAddress = proAddress;
    }

    public String getProColor() {
        return proColor;
    }

    public void setProColor(String proColor) {
        this.proColor = proColor;
    }

    public Float getProSize() {
        return proSize;
    }

    public void setProSize(Float proSize) {
        this.proSize = proSize;
    }

    public Date getProDate() {
        return proDate;
    }

    public void setProDate(Date proDate) {
        this.proDate = proDate;
    }

    @Override
    public String toString() {
        return "Product{" +
                "proId='" + proId + '\'' +
                ", proName='" + proName + '\'' +
                ", proNum=" + proNum +
                ", proPrice=" + proPrice +
                ", proAddress='" + proAddress + '\'' +
                ", proColor='" + proColor + '\'' +
                ", proSize=" + proSize +
                ", proDate=" + proDate +
                '}';
    }
}
