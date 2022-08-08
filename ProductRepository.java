package com.java.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

	//Product findByName(String name);

	Product getProductByName(String name);

}
