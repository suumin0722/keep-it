package com.keepit.auth.service;

import com.keepit.auth.dto.LoginRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AuthServiceTest {

    private AuthService authService;

    @BeforeEach
    public void setUp() {
        authService = new AuthService();
    }

    @Test
    @DisplayName("로그인 성공 테스트")
    void testLoginSuccess() {
        LoginRequest request = new LoginRequest();
        request.setEmail("sumin@keepit.com");
        request.setPassword("1234");

        boolean result = authService.login(request);
        assertTrue(result);
    }

    @Test
    @DisplayName("로그인 실패 테스트 - 비밀번호 불일치")
    void testLoginWithWrongPassword() {
        LoginRequest request = new LoginRequest();
        request.setEmail("sumin@keepit.com");
        request.setPassword("wrong");

        boolean result = authService.login(request);
        assertFalse(result);
    }

    @Test
    @DisplayName("로그인 실패 테스트 - 존재하지 않는 이메일")
    void testLoginWithWrongEmail() {
        LoginRequest request = new LoginRequest();
        request.setEmail("wrong@keepit.com");
        request.setPassword("1234");

        boolean result = authService.login(request);
        assertFalse(result);
    }
}
