package com.groupnine.mediasocial.repository;

import com.groupnine.mediasocial.entity.User;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
	@Query(value = "SELECT * FROM Users u WHERE u.email = ?1 AND u.password = ?2", nativeQuery = true)
	List<User> checkLoginUser(String email, String password);
    }
