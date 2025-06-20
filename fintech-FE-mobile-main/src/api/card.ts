import { ApiClient, API_ENDPOINTS } from './config';

export type CardForm = {
  cardNumber: string;
  expiry: string;
  birth: string;
  password2Digits: string;
  cvc: string;
  paymentPassword: string;
};

export type CardResponse = {
  cardToken: string;
  maskedCardNumber: string;
  cardCompany: string;
  cardType: string;
  expiryDate: string;
  createdAt: string;
};

export type CardRegisterRequest = {
  cardNumber: string;
  expiryDate: string;
  birthDate: string;
  cardPw: string;
  cvc: string;
  paymentPassword: string;
};

export const card = {
  register: async (cardForm: CardForm): Promise<void> => {
    const request: CardRegisterRequest = {
      cardNumber: cardForm.cardNumber,
      expiryDate: cardForm.expiry,
      birthDate: cardForm.birth,
      cardPw: cardForm.password2Digits,
      cvc: cardForm.cvc,
      paymentPassword: cardForm.paymentPassword,
    };

    return ApiClient.post(API_ENDPOINTS.CARDS.REGISTER, request);
  },

  getAll: async (): Promise<CardResponse[]> => {
    return ApiClient.get<CardResponse[]>(API_ENDPOINTS.CARDS.LIST);
  },

  get: async (cardToken: string): Promise<CardResponse> => {
    return ApiClient.get<CardResponse>(API_ENDPOINTS.CARDS.DETAIL(cardToken));
  },

  delete: async (cardToken: string): Promise<void> => {
    return ApiClient.delete(API_ENDPOINTS.CARDS.DELETE(cardToken));
  },
};
