package com.example.ecommerce.Model;



import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class User {
	@Id @GeneratedValue
	int userid;
	String username,password,email,role;
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@OneToMany(mappedBy = "user")
	List<Cart> cart;
	
	@OneToMany(targetEntity = Purchase.class,cascade = CascadeType.ALL)
	@JoinColumn(name="user_purchase",referencedColumnName = "userid")
	List<Purchase> allpurchase;
	

}
