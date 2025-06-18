import { PaymentItemType } from '@/pages/UsageHistory';
import { PaymentFilter } from '@/pages/UsageHistory/Filter';

export const mockData: PaymentItemType[] = [
  {
    id: '1',
    date: '2025-05-01',
    store: '스타벅스',
    amount: 4800,
  },
  {
    id: '2',
    date: '2025-05-03',
    store: '이마트24',
    amount: 2300,
  },
];

export const fetchPayments = async (filter: PaymentFilter): Promise<PaymentItemType[]> => {
  // 필터링 로직 (클라이언트 측 예시)
  return mockData
    .filter((item) => {
      if (filter.startDate && item.date < filter.startDate) return false;
      if (filter.endDate && item.date > filter.endDate) return false;
      return true;
    })
    .sort((a, b) => {
      if (filter.sortBy === 'amount') return b.amount - a.amount;
      return b.date.localeCompare(a.date);
    });
};
