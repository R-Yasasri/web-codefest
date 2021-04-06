package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Words;

@Repository
public interface WordsRepository  extends JpaRepository<Words,Integer>{
	
	
	
	@Query("SELECT u From Words u WHERE u.keyword=?1")
	public Words getserachByKeyword(String keyword);
	

}
