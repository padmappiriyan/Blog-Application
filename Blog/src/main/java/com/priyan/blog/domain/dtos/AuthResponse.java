package com.priyan.blog.domain.dtos;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder //ResponseDto
public class AuthResponse {
    private String token;
    private long expiresIn;

}
