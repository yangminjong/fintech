import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  paddingBottom: '80px',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 20px',
  height: '60px',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e5e7eb',
  position: 'sticky',
  top: 0,
  zIndex: 10,
});

export const backButton = style({
  backgroundColor: 'transparent',
  borderColor: 'transparent',
});

export const title = style({
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#111827',
});

export const rightSpace = style({
  width: '24px', // 오른쪽 공간 확보용 (아이콘 자리)
});

export const HistoryInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 16px',
  borderBottom: '1px solid #eee',
  fontSize: '14px',
});

export const filterButton = style({
  background: '#f5f5f5',
  border: '1px solid #ccc',
  borderRadius: '6px',
  padding: '6px 10px',
  fontSize: '14px',
  cursor: 'pointer',
});

export const paymentList = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px',
});

export const paymentItem = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 16px',
  borderBottom: '1px solid #f0f0f0',
  fontSize: '14px',
});

export const paymentDate = style({
  color: '#999',
  fontSize: '12px',
  marginBottom: '4px',
});

export const paymentName = style({
  fontWeight: 500,
  marginBottom: '2px',
});

export const paymentAmount = style({
  fontSize: '20px',
  color: '#333',
});
