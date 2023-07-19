package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;

public class Service {
	@Autowired(required=true)
	Repository rep1;
	
	public String updateStudent(Model a)
	{
		rep1.save(a);
		return "updated";
	}
		
}