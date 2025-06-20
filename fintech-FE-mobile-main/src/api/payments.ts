import { ApiClient, API_ENDPOINTS } from './config';
import { PaymentItemType } from '@/pages/UsageHistory';
import { PaymentFilter } from '@/pages/UsageHistory/Filter';

export type TransactionResponse = {
  transactionId: number;
  amount: number;
  status: string;
  cardToken: string;
  createdAt: string;
  merchantName?: string;
  merchantOrderId?: string;
};

export type PaymentReadyRequest = {
  merchantId: number;
  amount: number;
  merchantOrderId: string;
};

export type PaymentReadyResponse = {
  paymentToken: string;
  amount: number;
  status: string;
  qrData: string;
  createdAt: string;
};

export type PaymentExecuteRequest = {
  paymentToken: string;
  cardToken: string;
  paymentMethodType: string;
  userId: number;
};

export type PaymentExecuteResponse = {
  paymentToken: string;
  status: string;
  amount: number;
  completedAt?: string;
};

export const fetchPayments = async (filter: PaymentFilter): Promise<PaymentItemType[]> => {
  try {
    // 사용자별 거래 내역 조회
    const transactions = await ApiClient.get<TransactionResponse[]>(
      API_ENDPOINTS.TRANSACTIONS.BY_USER
    );

    // 거래 내역을 PaymentItemType 형태로 변환
    let paymentItems: PaymentItemType[] = transactions.map((transaction) => ({
      id: transaction.transactionId.toString(),
      date: transaction.createdAt.split('T')[0], // ISO 날짜에서 날짜 부분만 추출
      store: transaction.merchantName || '상점명 미정',
      amount: transaction.amount,
    }));

    // 필터링 적용
    paymentItems = paymentItems.filter((item) => {
      if (filter.startDate && item.date < filter.startDate) return false;
      if (filter.endDate && item.date > filter.endDate) return false;
      return true;
    });

    // 정렬 적용
    paymentItems.sort((a, b) => {
      if (filter.sortBy === 'amount') return b.amount - a.amount;
      return b.date.localeCompare(a.date);
    });

    return paymentItems;
  } catch (error) {
    console.error('Failed to fetch payments:', error);
    // 에러 발생 시 빈 배열 반환
    return [];
  }
};

export const fetchPaymentsByCard = async (cardToken: string): Promise<PaymentItemType[]> => {
  try {
    const transactions = await ApiClient.get<TransactionResponse[]>(
      API_ENDPOINTS.TRANSACTIONS.BY_CARD(cardToken)
    );

    return transactions.map((transaction) => ({
      id: transaction.transactionId.toString(),
      date: transaction.createdAt.split('T')[0],
      store: transaction.merchantName || '상점명 미정',
      amount: transaction.amount,
    }));
  } catch (error) {
    console.error('Failed to fetch payments by card:', error);
    return [];
  }
};

export const payments = {
  ready: async (request: PaymentReadyRequest): Promise<PaymentReadyResponse> => {
    return ApiClient.paymentRequest<PaymentReadyResponse>(
      API_ENDPOINTS.PAYMENTS.READY,
      {
        method: 'POST',
        body: JSON.stringify(request),
      }
    );
  },

  execute: async (request: PaymentExecuteRequest): Promise<PaymentExecuteResponse> => {
    return ApiClient.paymentRequest<PaymentExecuteResponse>(
      API_ENDPOINTS.PAYMENTS.EXECUTE,
      {
        method: 'PATCH',
        body: JSON.stringify(request),
      }
    );
  },

  getStatus: async (paymentToken: string): Promise<PaymentExecuteResponse> => {
    return ApiClient.paymentRequest<PaymentExecuteResponse>(
      API_ENDPOINTS.PAYMENTS.STATUS(paymentToken)
    );
  },

  cancel: async (paymentToken: string): Promise<PaymentExecuteResponse> => {
    return ApiClient.paymentRequest<PaymentExecuteResponse>(
      API_ENDPOINTS.PAYMENTS.CANCEL(paymentToken),
      {
        method: 'DELETE',
      }
    );
  },
};
