package com.example.ecommerce.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Purchasedetails {
	@Id @GeneratedValue
	int pdid;
	
	@ManyToOne
	@JoinColumn(name="pid")
	Purchase p;
	
	@ManyToOne
	@JoinColumn(name="Purchasedetails_product")
	Product product;

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	int quantity,price,total;

	public int getPdid() {
		return pdid;
	}

	public void setPdid(int pdid) {
		this.pdid = pdid;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}
	
	
}
