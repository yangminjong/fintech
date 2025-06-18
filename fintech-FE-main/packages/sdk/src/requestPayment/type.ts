export interface PaymentReqBody {
  amount: number;
  merchant_order_id: string;
  merchant_id: string;
  productName?: string;
}

export interface PaymentResData {
  transaction_token: string;
  expires_at: string;
}
