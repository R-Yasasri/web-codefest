package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.AdminUserObj;
import com.example.demo.entity.AdminUser;

import java.util.List;

@Repository
public interface AdminUserRepository extends JpaRepository<AdminUser, Integer>{

	@Query("SELECT new com.example.demo.dto.AdminUserObj(u.id,u.name,u.phone,u.username,u.status) FROM AdminUser u WHERE u.name LIKE %?1% ")
	List<AdminUserObj> getUserByName(String name);
	
	@Query("SELECT new com.example.demo.dto.AdminUserObj(u.id,u.name,u.phone,u.username,u.status) FROM AdminUser u ")
	List<AdminUserObj> getUsersWithoutPassword();
	
	@Query("SELECT u FROM AdminUser u WHERE u.username=?1 AND u.password=?2")
	AdminUser  getByuserNamePassword(String name,String password);

}
