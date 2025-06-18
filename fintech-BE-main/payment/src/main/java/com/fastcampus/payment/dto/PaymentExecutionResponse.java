package com.fastcampus.payment.dto;

import com.fastcampus.payment.entity.*;
import com.fastcampus.paymentmethod.entity.PaymentMethod;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@Builder
@ToString
public class PaymentExecutionResponse {

    private final String paymentToken;
    private final PaymentStatus status;

    private final Long amount;
    private final Long merchantId;
    private final String merchantOrderId;
    private final LocalDateTime createdAt;

    //  추가 필드들

    private final String cardToken;
    private final Boolean approvalResult;



    public PaymentExecutionResponse(Payment payment) {
        Transaction transaction =  payment.getLastTransaction();
        this.paymentToken = payment.getPaymentToken();
        this.status = payment.getStatus();
        this.amount = transaction.getAmount();
        this.merchantId = payment.getMerchantId();
        this.merchantOrderId = payment.getMerchantOrderId();
        this.createdAt = transaction.getCreatedAt();
        this.cardToken = transaction.getCardToken();
        this.approvalResult = transaction.getStatus() == PaymentStatus.COMPLETED;
    }


}
