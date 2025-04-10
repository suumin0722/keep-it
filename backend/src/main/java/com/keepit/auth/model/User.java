package com.keepit.auth.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class User {
    private Long id;                   // 사용자 ID (자동증가)
    private String email;              // 이메일 (로그인 ID)
    private String password;           // 비밀번호 (암호화 저장)
    private String name;               // 이름
    private String gender;             // 성별
    private LocalDate birthday;        // 생일
    private String phone;              // 전화번호
    private String oauthProvider;      // 소셜 로그인 제공자 (google, kakao 등)
    private String oauthId;            // 소셜 로그인 식별자
    private boolean isActive;          // 계정 활성화 여부
    private LocalDate createdAt;       // 가입일
    private LocalDate modifiedAt;      // 수정일

}
