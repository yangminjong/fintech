import { create } from 'zustand';

type CardRegisterState = {
  selectedCardCompany: string | null;
  isDrawerOpen: boolean;
  setCardCompany: (name: string) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  reset: () => void;
};

export const useCardRegisterStore = create<CardRegisterState>((set) => ({
  selectedCardCompany: null,
  isDrawerOpen: false,
  setCardCompany: (name) => set({ selectedCardCompany: name, isDrawerOpen: false }),
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
  reset: () =>
    set({
      selectedCardCompany: null,
      isDrawerOpen: false,
    }),
}));
