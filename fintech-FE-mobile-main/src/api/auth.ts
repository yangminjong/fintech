import { ApiClient, API_ENDPOINTS } from './config';

export type User = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type RegisterResponse = {
  userId: number;
  email: string;
  name: string;
  status: string;
};

export type UserInfo = {
  email: string;
  name: string;
  phone: string;
  status: string;
};

export const auth = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await ApiClient.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, {
      email,
      password,
    });
    
    // 토큰을 로컬 스토리지에 저장
    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    
    return response;
  },

  register: async (user: User): Promise<RegisterResponse> => {
    return ApiClient.post<RegisterResponse>(API_ENDPOINTS.AUTH.REGISTER, user);
  },

  logout: async (): Promise<void> => {
    await ApiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },

  getUserInfo: async (): Promise<UserInfo> => {
    return ApiClient.get<UserInfo>(API_ENDPOINTS.AUTH.INFO);
  },

  refreshToken: async (): Promise<LoginResponse> => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }
    
    const response = await fetch(`${API_ENDPOINTS.AUTH.REFRESH}`, {
      method: 'POST',
      headers: {
        'Refresh-Token': `Bearer ${refreshToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Token refresh failed');
    }

    const data = await response.json();
    localStorage.setItem('accessToken', data.accessToken);
    return data;
  },
};
