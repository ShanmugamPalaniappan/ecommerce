package com.example.ecommerce.Service;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;

import com.example.ecommerce.Model.Cart;
import com.example.ecommerce.Model.Product;
import com.example.ecommerce.Model.Purchase;
//import com.example.ecommerce.Model.Admin;
import com.example.ecommerce.Model.User;

public interface Allservice {
	String adduser(User u);
	User login(User u);
	List<User>allusers();
	List<User> alladmins();
	String addproduct(@RequestBody Product p);
	List<Product> allproducts();
	String adminpurchase(Product p);
	String deleteuser (User u);
	String Updateuser(User u);
	String addcart(Cart c);
	List<Cart> getcart(Cart c);
	String deletefromcart(Cart c);
	String deleteusercart(Cart c);
	int newpurchase(Purchase p);
	List<Purchase> getorders(User u);
	List<Purchase> getrequests();
	List<Purchase> getpurchasehistory();
	String changestatus(Purchase p);
	int getcartquantity(User u);
}
