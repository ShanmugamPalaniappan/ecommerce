package com.example.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.Model.Product;

public interface Productrepo extends JpaRepository<Product, Integer>{

}
