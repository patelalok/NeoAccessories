package com.neo.accessories.NeoAccessories.repository;

import com.neo.accessories.NeoAccessories.entity.TransactionLineItemDao;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by apatel2 on 5/18/17.
 */

@Transactional
public interface TransactionLineItemRepository extends JpaRepository<TransactionLineItemDao, Integer> {

    List<TransactionLineItemDao> findAll();

}
