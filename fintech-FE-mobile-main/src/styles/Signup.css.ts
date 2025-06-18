import { style } from '@vanilla-extract/css';

export const container = style({
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
  height: '48px',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e5e7eb',
  position: 'sticky',
  top: 0,
});

export const backButton = style({
  backgroundColor: 'transparent',
  borderColor: 'transparent',
});

export const headerName = style({
  fontWeight: 'bold',
});

export const title = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
});

export const description = style({
  color: 'gray',
  marginBottom: '1rem',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const input = style({
  display: 'flex',
  padding: '18px 16px',
  height: '54px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  borderRadius: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
});

export const button = style({
  width: '100%',
  height: '64px',
  fontSize: '1rem',
  background: '#18254C',
  color: '#fff',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  marginBottom: '1rem',
});
