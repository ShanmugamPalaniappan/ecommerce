package com.example.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.Model.Purchase;

public interface Purchaserepo extends JpaRepository<Purchase, Integer> {

}
