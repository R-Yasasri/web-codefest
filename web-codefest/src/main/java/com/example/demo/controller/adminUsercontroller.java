package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.AdminUserObj;
import com.example.demo.entity.AdminUser;
import com.example.demo.service.AdminUserService;

import java.util.List;



@RestController
@RequestMapping("/adminUser")
@CrossOrigin(origins = "*",allowedHeaders = "*")

public class adminUsercontroller {

	@Autowired
	AdminUserService userService;

	@GetMapping("/hello")
	public String getHello() {
		
		return "welcome.. codefest";	
		
	}

	@GetMapping("/")
	public List<AdminUserObj> getAllUsers(){
		return userService.getUsers();
	}
	
	@PostMapping("/")
	public AdminUser addUser(@RequestBody AdminUser user) {
	
		return userService.addAUser(user);
	}
	
	@PutMapping("/")
	public String updateUser(@RequestBody AdminUser user) {

		return userService.updateUser(user);
	}
	
	@GetMapping("/getUserByName/{name}")
	public List<AdminUserObj> getUserByName(@PathVariable String name) {
		
		return userService.getUsersByName(name);
	}
	
	@DeleteMapping("{id}")
	public String deleteUser(@PathVariable int id) {
		return userService.deleteUser(id);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
