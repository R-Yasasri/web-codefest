package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Words;
import com.example.demo.repository.WordsRepository;


@Service
public class wordsService {
	
	
	@Autowired
	WordsRepository wordsRepository;
	
	
	public List<Words> getserachByKeyword(String keyword) {
		
		
		return wordsRepository.getserachByKeyword(keyword);
		
		
	}
	
	
      public List<Words> getAllwords() {
		
		
		return wordsRepository.findAll();
		
		
	}
	
	
	public Words addProduct(Words word) {
		
		
		return wordsRepository.save(word);
		
	}
	
	
	
     public String deletewordst(int  id) {
		
    Words word	= wordsRepository.findById(id).orElse(null);
    	 
     String responses="";
    
		if(word !=null) {
			
			
			wordsRepository.delete(word);
			
			responses=word.getKeyword()+" Deleted";
			
		}else {
			
			responses=" Not  Deleted";
			
			
		}
		
		
		
		return responses;
		
	}
     
     public String updateWords(Words word) {
    	 
         Words savewords = wordsRepository.findById(word.getId()).orElse(null);
         if (savewords != null) {
         	
        	 savewords.setDefinition(word.getDefinition());
        	 savewords.setKeyword(word.getKeyword());
             
             
         }
         return "Updated Successfully";
     }
     
     
     
	
	
	
	
	
	

}
