package com.groupnine.mediasocial.dto;

import java.io.Serializable;

public class UserDTO implements Serializable {
	private String Email;
	private String Password;
	private String CheckPass;
	private String Profile_name;

	public UserDTO(String email, String password, String profile_name) {
		this.Email = email;
		this.Password = password;
		this.Profile_name = profile_name;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getCheckPass() {
		return CheckPass;
	}

	public void setCheckPass(String checkPass) {
		CheckPass = checkPass;
	}

	public String getProfile_name() {
		return Profile_name;
	}

	public void setProfile_name(String profile_name) {
		Profile_name = profile_name;
	}
	
}
