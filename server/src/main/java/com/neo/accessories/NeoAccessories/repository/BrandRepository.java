package com.neo.accessories.NeoAccessories.repository;

import com.neo.accessories.NeoAccessories.entity.BrandDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by apatel2 on 5/16/17.
 */
public interface BrandRepository extends JpaRepository<BrandDao, Integer> {

    List<BrandDao> findAll();

    @Query(value = "SELECT * FROM brand b ORDER BY b.name", nativeQuery = true)
    List<Object[]> getAllBrands();

}
