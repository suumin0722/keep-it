package com.keepit.auth.service;

import com.keepit.auth.dto.LoginRequest;
import com.keepit.auth.model.User;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

    //임시 유저 저장소(email 기준)
    private final Map<String, User> users = new HashMap<>();
    
    //생성자
    public AuthService() {
        //mock user 등록
        User mockUser = new User();
        mockUser.setId(1L);
        mockUser.setEmail("sumin@keepit.com");
        mockUser.setPassword("1234"); // 실제로는 암호화할 것!
        mockUser.setName("수민");
        mockUser.setGender("female");
        mockUser.setBirthday(LocalDate.of(1998, 1, 12));
        mockUser.setPhone("01012345678");
        mockUser.setOauthProvider(null);
        mockUser.setOauthId(null);
        mockUser.setActive(true);
        mockUser.setCreatedAt(LocalDate.now());
        mockUser.setModifiedAt(LocalDate.now());

        users.put(mockUser.getEmail(), mockUser);
    }

    // 로그인 처리
    public boolean login(LoginRequest request) {
        User user = users.get(request.getEmail());
        if (user == null) return false;
        return user.getPassword().equals(request.getPassword());
    }
}
