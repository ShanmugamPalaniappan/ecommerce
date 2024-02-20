package com.example.ecommerce.Maincontroller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.ecommerce.Model.Cart;
import com.example.ecommerce.Model.Product;
import com.example.ecommerce.Model.Purchase;
//import com.example.ecommerce.Model.Admin;
import com.example.ecommerce.Model.User;
import com.example.ecommerce.Service.Implementation;

@RestController
@CrossOrigin
public class Maincontroller {
	@Autowired 
	Implementation imp;
	private static final String path = "D:\\Reactpics\\";

	@PostMapping("/adduser")
	String adduser(@RequestBody User u)
	{
		return imp.adduser(u);
	}
	@PostMapping("/login")
	User login(@RequestBody User u)
	{
		return imp.login(u);
	}
	@GetMapping("/allusers")
	List<User> allusers()
	{
		return imp.allusers();
	}
	@GetMapping("/alladmins")
	List<User> alladmins()
	{
		return imp.alladmins();
	}
	@PostMapping("/upload")
	String imageupload(@RequestParam("file") MultipartFile file,@RequestParam("name") String x) throws Exception
	{
		try 
		{
			if (!file.getOriginalFilename().isEmpty()) {

	            BufferedOutputStream outputStream = 
	                  new BufferedOutputStream(
	                    new FileOutputStream(new File(path, 
	                    		x)));

	            outputStream.write(file.getBytes());
	            outputStream.flush();
	            outputStream.close();
	            return x;
			}	
		}
		catch(Exception e){
			return "something wrong "+e;
		}
		return "end";
	}
	
	 @PostMapping(path="/deletefile/{y}")
	 public void deletefile(@PathVariable ("y")String y)  throws Exception 
	 {
		 System.out.println(y);
		 File file= new File(path+y);
		 System.out.println("file : "+file);
		 if (file.delete()) 
		 {
			 System.out.println("File deleted successfully");
		 }
		 else 
		 {
			 System.out.println("Failed to delete the file");
		 }
	   
	 }
	 private HttpHeaders headers(String name) {
		    HttpHeaders head = new HttpHeaders();
		    head.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + name);
		    head.add("Cache-Control", "no-cache, no-store, must-revalidate");
		    head.add("Pragma", "no-cache");
		    head.add("Expires", "0");
		    
		    return head;
		}
	 @GetMapping(path = "/download/{name}")
	 public ResponseEntity<ByteArrayResource> download
	       (@PathVariable("name") String name) throws IOException {

	     File file = new File(path + name);
	     Path path = Paths.get(file.getAbsolutePath());
	     ByteArrayResource resource = 
	            new ByteArrayResource(Files.readAllBytes(path));

	     return ResponseEntity.ok().headers(this.headers(name))
	           .contentLength(file.length())
	             .contentType(MediaType
	              .parseMediaType("application/octet-stream"))
	          .body(resource);
	 }
	 @PostMapping("/addproduct")
	 String addproduct(@RequestBody Product p)
	 {
		 return imp.addproduct(p);
	 }
	 @GetMapping("/allproducts")
	 List<Product> allproducts()
	 {
		 return imp.allproducts();
	 }
	 @PostMapping("/adminpurchase")
	 String adminpurchase(@RequestBody Product p)
	 {
		 return imp.adminpurchase(p);
	 }
	 @PostMapping("/deleteuser")
	 String deleteuser(@RequestBody User u)
	 {
		 return imp.deleteuser(u);
	 }
	 @PostMapping("/updateuser")
	 String updateuser(@RequestBody User u)
	 {
		 return imp.Updateuser(u);
	 }
	 @PostMapping("/addtocart")
	 String addtocart(@RequestBody Cart c)
	 {
		 return imp.addcart(c);
	 }
	 @PostMapping("/getcart")
	 List<Cart> getcart(@RequestBody Cart c)
	 {
		 return imp.getcart(c);
	 }
	 @PostMapping("/deletefromcart")
	 String deletefromcart(@RequestBody Cart c)
	 {
		 return imp.deletefromcart(c);
	 }
	 @PostMapping("/deleteusercart")
	 String deleteusercart(@RequestBody Cart c)
	 {
		 return imp.deleteusercart(c);
	 }
	 @PostMapping("/getorders")
	 List<Purchase> getorders(@RequestBody User u)
	 {
		 return imp.getorders(u);
	 }
	 @PostMapping("/getrequests")
	 List<Purchase> getrequests()
	 {
		 return imp.getrequests();
	 }
	 @PostMapping("/changestatus")
	 String changestatus(@RequestBody Purchase p)
	 {
		 return imp.changestatus(p);
	 }
	 @GetMapping("/getpurchasehistory")
	 List<Purchase> getpurchasehistory()
	 {
		 return imp.getpurchasehistory();
	 }
	 @PostMapping("/getcartquantity")
	 int getcartquantity(@RequestBody User u)
	 {
		 return imp.getcartquantity(u);
	 }
	 @PostMapping("/newpurchase")
	 int newpurchase(@RequestBody Purchase p)
	 {
		 return imp.newpurchase(p);
	 }
}
