package com.example.ecommerce.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {
	@Id@GeneratedValue
	int cartid;
	public int getCartid() {
		return cartid;
	}

	public void setCartid(int cartid) {
		this.cartid = cartid;
	}

	@ManyToOne
	@JoinColumn(name="userid")
	User user;
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@ManyToOne
	@JoinColumn(name="productid")
	Product product;
	
	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	int quantity,costprice,amount;
	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getCostprice() {
		return costprice;
	}

	public void setCostprice(int costprice) {
		this.costprice = costprice;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	String productname;
	

	
}
