import { create } from 'zustand';

type AuthState = {
  user: { email: string; name: string } | null;
  setUser: (user: AuthState['user']) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user });
  },
  clearUser: () => {
    localStorage.removeItem('user');
    set({ user: null });
  },
}));
