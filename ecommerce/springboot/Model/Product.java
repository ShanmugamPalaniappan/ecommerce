package com.example.ecommerce.Model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Product {
	@Id @GeneratedValue
	int productid;
	String productname;
	int quantity,costprice,sellingprice;
	public int getProductid() {
	return productid;
	}
	public void setProductid(int productid) {
		this.productid = productid;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
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
	public int getSellingprice() {
		return sellingprice;
	}
	public void setSellingprice(int sellingprice) {
		this.sellingprice = sellingprice;
	}
	@OneToMany(targetEntity = Photo.class,cascade = CascadeType.ALL)
	@JoinColumn(name="product_photo",referencedColumnName = "productid")
	List<Photo> allphotos;
	public List<Photo> getAllphotos() {
		return allphotos;
	}
	public void setAllphotos(List<Photo> allphotos) {
		this.allphotos = allphotos;
	}
	
	@OneToMany(mappedBy = "product")
	List<Cart> cart;
	
	@OneToMany(targetEntity = Purchasedetails.class,cascade = CascadeType.ALL)
	@JoinColumn(name="Purchasedetails_product",referencedColumnName = "productid")
	List<Purchasedetails> allpd;

}
