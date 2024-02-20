package com.example.ecommerce.Model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Purchase {
	@Id @GeneratedValue
	int purchaseid;
	
	String status;
	int grandtotal,quantity;
	
	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@ManyToOne
	@JoinColumn(name="user_purchase")
	User u;
	
	public User getU() {
		return u;
	}

	public void setU(User u) {
		this.u = u;
	}

	@OneToMany(targetEntity = Purchasedetails.class,cascade = CascadeType.ALL)
	@JoinColumn(name="pid",referencedColumnName = "purchaseid")
	List<Purchasedetails> details;

	public int getPurchaseid() {
		return purchaseid;
	}

	public void setPurchaseid(int purchaseid) {
		this.purchaseid = purchaseid;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getGrandtotal() {
		return grandtotal;
	}

	public void setGrandtotal(int grandtotal) {
		this.grandtotal = grandtotal;
	}

	public List<Purchasedetails> getDetails() {
		return details;
	}

	public void setDetails(List<Purchasedetails> details) {
		this.details = details;
	}
	
}
