import { style } from '@vanilla-extract/css';

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

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '20px',
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  boxSizing: 'border-box',
});

export const cardCompanyButton = style({
  padding: '10px',
  fontSize: '18px',
  height: '72px',
  textAlign: 'left',
  border: '1px solid #ccc',
  borderRadius: '12px',
  backgroundColor: '#fff',
});

export const cardCompanySelectContainer = style({
  display: 'flex',
  color: 'grey',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '14px',
  fontWeight: '500',
  color: '#333',
});

export const input = style({
  padding: '0px 10px',
  height: '72px',
  fontSize: '18px',
  border: '1px solid #ccc',
  borderRadius: '12px',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
});

export const button = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  alignItems: 'center',
  height: '64px',
  fontSize: '1rem',
  background: '#18254C',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  margin: '1rem',
});

export const cardNumberInput = style({
  padding: '0px 10px',
  display: 'flex',
  height: '72px',
  fontSize: '18px',
  border: '1px solid #ccc',
  borderRadius: '12px',
  backgroundColor: '#fff',
});

export const expiryBlockContainer = style({
  gap: '6px',
});

export const expiryBlock = style({
  display: 'flex',
  height: '72px',
  padding: '0px 10px',
  fontSize: '18px',
  border: '1px solid #ccc',
  borderRadius: '12px',
  backgroundColor: '#fff',
});

export const slash = style({
  fontSize: '20px',
  color: '#666',
});

export const drawerOverlay = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
});

export const drawerContent = style({
  backgroundColor: '#fff',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  width: '100%',
  padding: '16px',
});

export const dragHandle = style({
  width: '40px',
  height: '4px',
  backgroundColor: '#ccc',
  borderRadius: '2px',
  margin: '0 auto 12px',
});

export const title = style({
  textAlign: 'left',
  fontSize: '16px',
  marginBottom: '12px',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: '8px',
});

export const gridItem = style({
  padding: '50px 30px',
  borderRadius: '12px',
  border: '1px solid #ccc',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
});
