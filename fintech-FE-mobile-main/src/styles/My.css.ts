import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  paddingBottom: '80px',
});

export const infoBox = style({
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid #e5e7eb',
  borderRadius: '8px',
  margin: '8px',
  padding: '16px',
});

export const name = style({
  fontSize: '50px',
  fontWeight: 'bold',
});

export const email = style({
  fontSize: '20px',
  color: 'grey',
});

export const logout = style({
  margin: '40px 20px 0',
  width: 'calc(100% - 40px)',
  padding: '12px',
  borderRadius: '8px',
  backgroundColor: '#ef4444',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '16px',
  border: 'none',
});
