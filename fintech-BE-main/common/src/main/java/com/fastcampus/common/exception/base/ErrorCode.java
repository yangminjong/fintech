package com.fastcampus.common.exception.base;

import org.springframework.http.HttpStatus;

public interface ErrorCode {
    HttpStatus getStatus();
    String getMessage();
    String name();
}
