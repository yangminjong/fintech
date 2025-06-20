// API 기본 설정
export const API_CONFIG = {
  BASE_URL: 'http://localhost:8083', // appuser-manage 서비스
  PAYMENT_URL: 'http://localhost:8081', // payment 서비스
  TIMEOUT: 10000,
  HEADERS: {
    'Content-Type': 'application/json',
  },
};

// API 엔드포인트 정의
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/app-users/login',
    REGISTER: '/app-users/register',
    LOGOUT: '/app-users/logout',
    REFRESH: '/app-users/reissue',
    INFO: '/app-users/info',
  },
  CARDS: {
    LIST: '/app-users/cards',
    REGISTER: '/app-users/cards/register',
    DELETE: (cardToken: string) => `/app-users/cards/${cardToken}`,
    DETAIL: (cardToken: string) => `/app-users/cards/${cardToken}`,
  },
  TRANSACTIONS: {
    BY_CARD: (cardToken: string) => `/api/info/transactions/by-card/${cardToken}`,
    BY_USER: '/api/info/transactions/by-user',
  },
  PAYMENTS: {
    READY: '/api/payments',
    EXECUTE: '/api/payments',
    STATUS: (paymentToken: string) => `/api/payments/${paymentToken}`,
    CANCEL: (paymentToken: string) => `/api/payments/${paymentToken}`,
  },
};

// HTTP 클라이언트 유틸리티
export class ApiClient {
  private static getAuthHeaders(): Record<string, string> {
    const token = localStorage.getItem('accessToken');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  static async request<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...API_CONFIG.HEADERS,
        ...this.getAuthHeaders(),
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `HTTP ${response.status}`);
    }

    return response.json();
  }

  static async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(`${API_CONFIG.BASE_URL}${endpoint}`);
  }

  static async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(`${API_CONFIG.BASE_URL}${endpoint}`, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  static async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(`${API_CONFIG.BASE_URL}${endpoint}`, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  static async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(`${API_CONFIG.BASE_URL}${endpoint}`, {
      method: 'DELETE',
    });
  }

  // Payment API 전용 메서드
  static async paymentRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    return this.request<T>(`${API_CONFIG.PAYMENT_URL}${endpoint}`, options);
  }
} 