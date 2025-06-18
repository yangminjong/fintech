package com.fastcampus.payment.dto;

import com.fastcampus.payment.entity.Payment;
import com.fastcampus.payment.entity.PaymentStatus;
import lombok.Getter;



@Getter
public class PaymentCancelResponse {

    private final String paymentToken;
    private final PaymentStatus status;
    private final String merchantOrderId;

    public PaymentCancelResponse(Payment payment) {
        this.status = payment.getStatus();
        this.paymentToken = payment.getPaymentToken();
        this.merchantOrderId = payment.getMerchantOrderId();
    }

}
