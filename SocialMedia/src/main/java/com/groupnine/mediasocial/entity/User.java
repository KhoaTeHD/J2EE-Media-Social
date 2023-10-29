package com.groupnine.mediasocial.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Users") //đây là để trỏ lấy data từ table nào nè
public class User {
	//Tai khoan ket noi voi database
	@Id //Cai nay để nó hiểu lấy Id ở primary key hoặc not null
	@Column(name = "UserID")
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Cái này để giá trị id nó tự tăng á 
    private Long UserID;

    @Column(name = "Email",nullable = false)
    private String Email;

    @Column(name = "Profile_name",nullable = false)
    private String Profile_name;

    @Column(name = "Biography",nullable = true)
    private String Biography;
    
    @Column(name = "Gender",nullable = true)
    private String Gender;
    
    @Column(name = "Signup_date",nullable = false)
    private String Signup_date;
    
    @Column(name = "Birthday",nullable = false)
    private String Birthday;

    @Column(name = "NumberPhone",nullable = false)
    private int NumberPhone;

    @Column(name = "Avatar",nullable = false)
    private String Avatar;

    @Column(name = "Password",nullable = false)
    private String Password;

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getProfile_name() {
		return Profile_name;
	}

	public void setProfile_name(String profile_name) {
		Profile_name = profile_name;
	}

	public String getBiography() {
		return Biography;
	}

	public void setBiography(String biography) {
		Biography = biography;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public String getSignup_date() {
		return Signup_date;
	}

	public void setSignup_date(String signup_date) {
		Signup_date = signup_date;
	}

	public String getBirthday() {
		return Birthday;
	}

	public void setBirthday(String birthday) {
		Birthday = birthday;
	}

	public int getNumberPhone() {
		return NumberPhone;
	}

	public void setNumberPhone(int numberPhone) {
		NumberPhone = numberPhone;
	}

	public String getAvatar() {
		return Avatar;
	}

	public void setAvatar(String avatar) {
		Avatar = avatar;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public long getUserID() {
		return UserID;
	}
	public User() {
		
	}
	public User(String Email, String Profile_name, String Biography, String Gender, String Signup_date, String Birthday,
			int NumberPhone, String Avatar, String Password) {
		this.Email = Email;
		this.Profile_name = Profile_name;
		this.Biography = Biography;
		this.Gender = Gender;
		this.Signup_date = Signup_date;
		this.Birthday = Birthday;
		this.NumberPhone = NumberPhone;
		this.Avatar = Avatar;
		this.Password = Password;

	}
    
	
}
