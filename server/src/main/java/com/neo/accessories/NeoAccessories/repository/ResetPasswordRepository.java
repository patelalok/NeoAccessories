package com.neo.accessories.NeoAccessories.repository;

import com.neo.accessories.NeoAccessories.entity.ResetPasswordToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResetPasswordRepository extends JpaRepository<ResetPasswordToken, String> {

    ResetPasswordToken findFirstByEmailOrderByCreatedDateDesc(String email);
}
