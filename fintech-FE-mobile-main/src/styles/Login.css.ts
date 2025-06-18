import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '480px',
  height: '100vh',
  margin: '16px',
  justifyContent: 'center',
  gap: '55px',
});

export const title = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '16px',
});

export const input = style({
  width: '100%',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  height: '54px',
});

export const button = style({
  width: '100%',
  height: '64px',
  fontSize: '1rem',
  background: '#18254C',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  marginBottom: '1rem',
});

export const secondaryButton = style({
  backgroundColor: 'transparent',
  color: '#007bff',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: '0.9rem',
});
