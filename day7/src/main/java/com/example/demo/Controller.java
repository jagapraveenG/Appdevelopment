package com.example.demo;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins= "http://localhost:3000/")
@RestController
public class Controller {
	@Autowired
	Repository repo;

	
	@GetMapping("/get")
	List<Model> getList()
	{
		return repo.findAll();
	}
	
	@PostMapping("/post")
	public Model create(@RequestBody Model a)
	{
		return repo.save(a);
	}
}