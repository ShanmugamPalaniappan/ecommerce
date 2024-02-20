package com.example.ecommerce.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ecommerce.Model.Cart;
import com.example.ecommerce.Model.Product;
import com.example.ecommerce.Model.Purchase;
import com.example.ecommerce.Model.User;
import com.example.ecommerce.Repository.Cartrepo;
import com.example.ecommerce.Repository.Photorepo;
import com.example.ecommerce.Repository.Productrepo;
import com.example.ecommerce.Repository.Purchaserepo;
import com.example.ecommerce.Repository.Userrepo;

@Service
public class Implementation implements Allservice {

	@Autowired
	Userrepo userrepo;
	@Autowired
	Photorepo photorepo;
	@Autowired
	Productrepo productrepo;
	@Autowired
	Cartrepo cartrepo;
	@Autowired
	Purchaserepo purchaserepo;
	@Override
	public String adduser(User u) {
		// TODO Auto-generated method stub
		userrepo.save(u);
		return "success";
	}
	@Override
	public User login(User u) {
		// TODO Auto-generated method stub
		User y=new User();
		for(User x:userrepo.findAll())
		{
			if(x.getUsername().equals(u.getUsername())&& x.getPassword().equals(u.getPassword()))
			{
				y=x;
			}
		}
		return y;
	}
	@Override
	public List<User> allusers() {
		// TODO Auto-generated method stub
		List<User> y=new ArrayList<User>();
		for(User x:userrepo.findAll())
		{
			if(x.getRole().equals("user"))
			{
				y.add(x);
			}
		}
		return y;
	}
	@Override
	public List<User> alladmins() {
		// TODO Auto-generated method stub
		
		List<User> y=new ArrayList<User>();
		for(User x:userrepo.findAll())
		{
			if(x.getRole().equals("admin"))
			{
				y.add(x);
			}
		}
		return y;
	}
	@Override
	public String addproduct(Product p) {
		// TODO Auto-generated method stub
		photorepo.saveAll(p.getAllphotos());
		productrepo.save(p);
		return "success";
	}
	@Override
	public List<Product> allproducts() {
		// TODO Auto-generated method stub
		return productrepo.findAll();
	}
	@Override
	public String adminpurchase(Product p) {
		// TODO Auto-generated method stub
		for(Product p1:productrepo.findAll())
		{
			if(p1.getProductname().equals(p.getProductname()))
			{
				p1.setQuantity(p.getQuantity());
				productrepo.save(p1);
				return "success";
			}
		}
		return "failed";
	}
	@Override
	public String deleteuser(User u) {
		// TODO Auto-generated method stub
		userrepo.deleteById(u.getUserid());
		return "success";
	}
	@Override
	public String Updateuser(User u) {
		// TODO Auto-generated method stub
		for(User x :userrepo.findAll())
		{
			if(x.getUserid()==u.getUserid())
			{
				x.setEmail(u.getEmail());
				x.setPassword(u.getPassword());
				x.setUsername(u.getUsername());
				userrepo.save(x);
			}
		}
		return "success";
	}
	@Override
	public String addcart(Cart c) {
		// TODO Auto-generated method stub
		for(Product p:productrepo.findAll())
		{
			if(c.getProduct().getProductid()==p.getProductid())
			{
				c.setProductname(p.getProductname());
				c.setCostprice(p.getSellingprice());
				c.setAmount(p.getSellingprice()*c.getQuantity());
				cartrepo.save(c);
				return "success";
			}
		}
		return "failed";
	}
	@Override
	public List<Cart> getcart(Cart c) {
		// TODO Auto-generated method stub
		List<Cart > cart=new ArrayList<Cart>();
		for(Cart x:cartrepo.findAll())
		{
			if(x.getUser().getUserid()==c.getUser().getUserid())
			{
				cart.add(x);
			}
		}
		
		return cart;
	}
	@Override
	public String deletefromcart(Cart c) {
		// TODO Auto-generated method stub
		Optional<Cart> c1=cartrepo.findById(c.getCartid());
		if(c1.isPresent())
		{
			cartrepo.delete(c);
			return "success";
		}
		return "failed";
	}
	@Override
	public String deleteusercart(Cart c) {
		// TODO Auto-generated method stub
		for(Cart c1:cartrepo.findAll())
		{
			if(c1.getUser().getUserid()==c.getUser().getUserid())
			{
				cartrepo.delete(c1);
			}
		}
		return "success";
	}

	@Override
	public List<Purchase> getorders(User u) {
		// TODO Auto-generated method stub
		List<Purchase> allpurchase=new ArrayList<Purchase>();
		for(Purchase p:purchaserepo.findAll())
		{
			if(p.getU().getUserid()==u.getUserid())
			{
				allpurchase.add(p);
			}
		}
		return allpurchase;
	}
	@Override
	public List<Purchase> getrequests() {
		// TODO Auto-generated method stub
		List<Purchase> p=new ArrayList<Purchase>();
		for(Purchase p1:purchaserepo.findAll())
		{
			if(p1.getStatus().equals("pending"))
			{
				p.add(p1);
			}
		}
		return p;
	}
	@Override
	public List<Purchase> getpurchasehistory() {
		// TODO Auto-generated method stub
		List<Purchase> p=new ArrayList<Purchase>();
		for(Purchase p1:purchaserepo.findAll())
		{
			if(p1.getStatus().equals("completed"))
			{
				p.add(p1);
			}
		}
		return p;
	}
	@Override
	public String changestatus(Purchase p) {
		// TODO Auto-generated method stub
		for(Purchase p1:purchaserepo.findAll())
		{
			if(p1.getPurchaseid()==p.getPurchaseid())
			{
				p1.setStatus(p.getStatus());
				purchaserepo.save(p1);
				return "success";
			}
		}
		return "failed";
	}
	@Override
	public int getcartquantity(User u) {
		// TODO Auto-generated method stub
		int quantity=0;
		for(Cart c:cartrepo.findAll())
		{
			if(c.getUser().getUserid()==u.getUserid())
			{
				quantity+=c.getQuantity();
			}
		}
		return quantity;
	}
	@Override
	public int newpurchase(Purchase p) {
		// TODO Auto-generated method stub
		purchaserepo.save(p);
		return 1;
	}



}
