package com.groupnine.mediasocial.dto;

public class FriendRequestDTO {
	private String userID_Request;
	private String userID_Accept;
	
	public String getUserID_Request() {
		return userID_Request;
	}
	
	public void setUserID_Request(String userID_Request) {
		this.userID_Request = userID_Request;
	}
	
	public String getUserID_Accept() {
		return userID_Accept;
	}
	
	public void setUserID_Accept(String userID_Accept) {
		this.userID_Accept = userID_Accept;
	}
	
	
}
