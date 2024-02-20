package com.example.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.Model.Cart;

public interface Cartrepo extends JpaRepository<Cart, Integer> {

}
