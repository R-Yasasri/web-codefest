package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.AdminUser;
import com.example.demo.repository.AdminUserRepository;
import com.example.demo.dto.AdminUserObj;

@Service
public class AdminUserService {
	
	@Autowired
	AdminUserRepository userRepo;
	
	public AdminUser addAUser(AdminUser user) {
		return userRepo.save(user);
	}
	
	 
	public String updateUser(AdminUser user) {
		
		AdminUser avlUser= userRepo.findById(user.getId()).orElse(null);
		
		String message="";
		
		if(avlUser!=null) {
			avlUser.setName(user.getName());
			avlUser.setPassword(avlUser.getPassword());
			avlUser.setPhone(user.getPhone());
			avlUser.setUsername(user.getUsername());
			avlUser.setStatus(user.getStatus());
			
			userRepo.save(avlUser);
			message="Updated successfully!!";
		}else {
			message="No such user";
		}
		
		return message;
	}

	public List<AdminUserObj> getUsersByName(String name) {
		
		return userRepo.getUserByName(name);
	}
	
    public List<AdminUserObj> getUsers(){
		return userRepo.getUsersWithoutPassword();
    }
	
	public String deleteUser(int id) {
		AdminUser avlUser= userRepo.findById(id).orElse(null);
		
		String message="";
		if(avlUser!=null) {
			userRepo.delete(avlUser);
			message="Successfully deleted !!";
		}else {
			message="No such User";
		}
		return message;
	}
	
	 public AdminUser getByuserNamePassword(String name,String password) {
		 
		 
		 return userRepo.getByuserNamePassword(name, password);
		 
	 }
}
