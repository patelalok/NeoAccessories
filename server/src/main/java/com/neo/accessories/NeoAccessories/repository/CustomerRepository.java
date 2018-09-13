package com.neo.accessories.NeoAccessories.repository;

import com.neo.accessories.NeoAccessories.dto.CustomerDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by apatel2 on 5/17/17.
 */

@Transactional
public interface CustomerRepository extends JpaRepository<CustomerDao, String> {

    List<CustomerDao> findAll();

    CustomerDao findByPhoneNo(String phoneNo);

    CustomerDao findByEmail(String email);

    CustomerDao findByEmailAndPassword(String email, String password);

    @Modifying
    @Query(value = "UPDATE customer set password = ?1 where email = ?2", nativeQuery = true)
    void changePassword(String password, String email);

    @Query(value = "SELECT distinct c.name,\n" +
            "SUM(l.sale_quantity) quantity, \n" +
            "SUM(l.cost * l.sale_quantity) cost, \n" +
            "SUM(l.retail_with_discount * l.sale_quantity) retail,\n" +
            "SUM(l.discount) discount,\n" +
            "SUM((l.retail_with_discount * l.sale_quantity) - (l.cost * l.sale_quantity)) profit\n" +
            "FROM transaction t \n" +
            "INNER JOIN customer c on c.phone_no = t.customer_phoneno\n" +
            "INNER JOIN transaction_line_item l on l.transaction_com_id = t.transaction_com_id\n" +
            "WHERE l.date BETWEEN ?1 AND ?2 \n" +
            " AND (l.status = 'Complete' OR l.status = 'Return' OR l.status = 'Pending')\n" +
            "GROUP BY c.name", nativeQuery = true)
    List<Object[]> getSalesReportByCustomer(String startDate, String endDate);
}
