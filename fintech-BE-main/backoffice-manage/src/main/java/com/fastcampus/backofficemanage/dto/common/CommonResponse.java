package com.fastcampus.backofficemanage.dto.common;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommonResponse {
    private boolean success;
    private String message;

    public static CommonResponse success(String message) {
        return CommonResponse.builder()
                .success(true)
                .message(message)
                .build();
    }
}
