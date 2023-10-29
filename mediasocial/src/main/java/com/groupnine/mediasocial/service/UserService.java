package com.groupnine.mediasocial.service;

import org.springframework.stereotype.Service;
import com.groupnine.mediasocial.dto.UserDTO;
import com.groupnine.mediasocial.entity.User;

public interface UserService {
	void save(UserDTO userDTO);

	Boolean checkPasswordUser(String email, String password);

	Boolean checkUserbyEmail(String email);

	User getUserbyEmail(String email);
}
