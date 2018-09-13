package com.neo.accessories.NeoAccessories.repository;

import com.neo.accessories.NeoAccessories.entity.ModelDao;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by apatel2 on 5/16/17.
 */

@Transactional
public interface ModelRepository extends JpaRepository<ModelDao, Integer> {

    List<ModelDao> findAll();

    List<ModelDao> findAllByModelId(int modelId);

}
