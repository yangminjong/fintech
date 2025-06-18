package com.fastcampus.payment.service;

import com.fastcampus.payment.dto.PaymentExecutionResponse;
import com.fastcampus.payment.dto.PaymentExecutionRequest;
import jakarta.validation.Valid;

public interface PaymentExecutionService {
    /**
     * 결제 실행
     * @param request 결제 진행 요청 정보
     * @return 결제 진행 응답 정보
     */
    PaymentExecutionResponse execute(@Valid PaymentExecutionRequest request);

}
