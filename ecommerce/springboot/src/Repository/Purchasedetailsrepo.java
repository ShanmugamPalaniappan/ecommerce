package com.example.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.Model.Purchasedetails;

public interface Purchasedetailsrepo extends JpaRepository<Purchasedetails, Integer> {
	
}
