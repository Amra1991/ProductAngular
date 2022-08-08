package com.java.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.java.Entity.Product;
import com.java.repository.ProductRepository;
import com.java.service.ProductService;

@RestController
public class ProductController {
	@Autowired
public ProductService serv;
	@Autowired	
	private ProductRepository repo;
	
	@PostMapping("/addProduct")
public Product addProduct(@RequestBody Product product) {
	return serv.saveProduct(product);
}
	@PostMapping("/addProducts")
public List<Product> addProducts(@RequestBody List<Product> products){
	return serv.saveAllProducts(products);
}
	@GetMapping("/getAllProducts")
	public List<Product> findAllProducts(){
		return serv.getProducts();
	}
	@GetMapping("/getProductById/{id}")
	public Product findProductById(@PathVariable int id) {
		return serv.getProductById(id);
	}
	@GetMapping("/getProductByName/{name}")
	public Product findProductByName(@PathVariable String name) {
		return repo.getProductByName(name);
		//return serv.getProductByName(name);
		
	}
	@PutMapping("/update")
	public Product updateProduct(@RequestBody Product product) {
		return serv.updateProduct(product);
	}
	@DeleteMapping("/delete/{id}")
	public String deleteProduct(@PathVariable int id) {
		return serv.deleteProduct(id);
		
	}
	
	
}
