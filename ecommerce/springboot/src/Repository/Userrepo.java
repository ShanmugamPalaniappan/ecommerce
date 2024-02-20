package com.example.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.Model.User;

public interface Userrepo extends JpaRepository<User, Integer>{

}
