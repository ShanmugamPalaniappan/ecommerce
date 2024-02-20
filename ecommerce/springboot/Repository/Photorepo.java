package com.example.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.Model.Photo;

public interface Photorepo extends JpaRepository<Photo, Integer>{

}
