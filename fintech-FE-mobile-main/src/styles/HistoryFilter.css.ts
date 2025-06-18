import { style } from '@vanilla-extract/css';

export const container = style({
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    fontSize: '14px',
});

export const title = style({
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '8px',
});

export const label = style({
    fontSize: '14px',
    marginBottom: '4px',
});

export const dateRow = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
});

export const input = style({
    padding: '8px 10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    flex: 1,
});

export const select = style({
    padding: '8px 10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '6px',
});

export const buttonGroup = style({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
    marginTop: '16px',
});

export const button = style({
    flex: 1,
    padding: '10px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
});

export const resetButton = style([
    button,
    {
        backgroundColor: '#f5f5f5',
        color: '#333',
        border: '1px solid #ccc',
    },
]);

export const applyButton = style([
    button,
    {
        backgroundColor: '#007aff',
        color: 'white',
    },
]);
