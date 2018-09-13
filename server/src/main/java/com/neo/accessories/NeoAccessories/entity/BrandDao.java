package com.neo.accessories.NeoAccessories.entity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by apatel2 on 5/16/17.
 */
@Entity
@Table(name = "brand")
public class BrandDao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int brandId;
    private String name;
    private String description;

    @Lob
    @Column(name = "brandImage", columnDefinition="BLOB")
    private byte[] brandImage;

    @Transient
    private List<ModelDao> modelDtoList;

    public int getBrandId() {
        return brandId;
    }

    public void setBrandId(int brandId) {
        this.brandId = brandId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public byte[] getBrandImage() {
        return brandImage;
    }

    public void setBrandImage(byte[] brandImage) {
        this.brandImage = brandImage;
    }

    public List<ModelDao> getModelDtoList() {
        return modelDtoList;
    }

    public void setModelDtoList(List<ModelDao> modelDtoList) {
        this.modelDtoList = modelDtoList;
    }
}
