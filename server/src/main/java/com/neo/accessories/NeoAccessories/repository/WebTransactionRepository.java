package com.neo.accessories.NeoAccessories.repository;

import com.neo.accessories.NeoAccessories.entity.WebTransactionDao;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface WebTransactionRepository extends JpaRepository<WebTransactionDao, Integer> {

    WebTransactionDao findOneByCustomerPhoneno(String phoneNo);
}
