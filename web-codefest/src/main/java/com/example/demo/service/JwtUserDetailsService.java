package com.example.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.controller.JwtAuthenticationController;
<<<<<<< Updated upstream
import com.example.demo.entity.AdminUser;
=======
>>>>>>> Stashed changes


@Service
public class JwtUserDetailsService implements UserDetailsService {

	
	@Autowired
	AdminUserService userService;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
		
<<<<<<< Updated upstream
	AdminUser u	= userService.getByuserNamePassword(username,JwtAuthenticationController.pw);

=======
		com.example.demo.entity.AdminUser u	= userService.getByuserNamePassword(username,JwtAuthenticationController.pw);
		
		u.setPassword("123");
		u.setUsername("rajith123");
		
>>>>>>> Stashed changes
		String encodedPw= encoder.encode(JwtAuthenticationController.pw);
		
		if (u !=null) {
			return new User(u.getUsername(),encodedPw,
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}

}