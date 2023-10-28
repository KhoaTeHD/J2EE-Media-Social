package com.groupnine.mediasocial.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.groupnine.mediasocial.dto.FriendRequestDTO;

@Controller
public class FriendRequestController {
	
	@PostMapping("/friendrequest")
	@ResponseBody
	public FriendRequestDTO createFR(@RequestBody FriendRequestDTO model) {		
		return model;
	}
}
