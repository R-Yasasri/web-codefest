package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Words;
import com.example.demo.service.wordsService;



@RestController
@RequestMapping("/search")
public class wordscontroller {
	
	
	@Autowired
	wordsService wordsService;
	
	@GetMapping("/Bywords/{keyword}")
	public List<Words> getserachByKeyword(@PathVariable String keyword) {
		
		
		return  wordsService.getserachByKeyword(keyword);
		
	}
	
	@GetMapping("/getAll")
	
	public List<Words> getAllwords(){
		
		
		return wordsService.getAllwords();
		
	}
	
	
	
	@PostMapping("/addkeyword")
    public Words addProduct(@RequestBody @RequestParam("keyword")String keyword,@RequestBody @RequestParam("definition")String definition){
       
		Words word=new Words();
		word.setKeyword(keyword);
		word.setDefinition(definition);
    	
    	return wordsService.addProduct(word);
    	
    	
    }
	
	
	 @DeleteMapping("/deletekeyword/{id}")
	    public String deleteProduct(@PathVariable int id){
		 
		 
	        return wordsService.deletewordst(id);
	    }
	
	
	
	 
	 @PutMapping("/updateword")
	    public Words updateWords(@RequestBody Words word){
	        return wordsService.updateWords(word);
	    }
	 
	 
	
	
	
	
	
	

}
