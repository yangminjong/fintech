import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  paddingBottom: '80px',
  textAlign: 'center',
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

export const logo = style({
  fontSize: '24px',
});

export const title = style({
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#111827',
});

export const rightSpace = style({
  width: '24px', // 오른쪽 공간 확보용 (아이콘 자리)
});

export const ScannerWrapper = style({
  borderRadius: '12px',
  background: 'navy',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ScannerInfo = style({
  background: 'white',
  color: 'navy',
  padding: '8px 16px',
  borderRadius: '50px',
  width: '80%',
});
