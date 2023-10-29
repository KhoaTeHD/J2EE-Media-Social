package com.groupnine.mediasocial.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.groupnine.mediasocial.dto.FriendRequestDTO;

@Controller
public class FriendRequestController {
	
	@RequestMapping(value ="/friendrequest", method = RequestMethod.POST)
	@ResponseBody
	public FriendRequestDTO createFR(@RequestBody FriendRequestDTO model) {		
		return model;
	}
	
	@GetMapping("/getFriendsById")
	public String getFriendsByID() {
		return null;
	}
}