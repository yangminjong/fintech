import { createGlobalTheme } from '@vanilla-extract/css';

export const resolution = {
  max: '1920px',
  min: '1280px',
};

const commonVars = createGlobalTheme(':root', {
  color: {
    green: '#00D98B',
    greenD: '#00A86C',
    greenL: '#4FFABC',
    red: '#FF3737',
    redD: '#DB0042',
    redL: '#FF7AA2',
    yellow: '#FFB800',
    yellowD: '#E5A500',
    yellowL: '#FFD66B',
    etc: '#E8ECF5',
    modal: 'rgba(0, 0, 0, 0.50)',
    black: '#000000',
    gray3: '#333333',
    gray6: '#666666',
    white: '#FFFFFF',
    shadow: {
      red: 'rgba(255, 57, 57, 0.25)',
    },
    primary: '#18254c',
    primaryD: '#111b36',
    primaryL: '#B9C8FF',
    primaryB: '#F5F8FF',
    text: {
      title: '#000',
      main: '#4D4D4D',
      sub: '#858585',
      strong: '#0A0A0A',
      caption: '#B0B0B0',
    },
    inputBg: '#F8F8F8',
    menu: '#393939',
    label: '#252525',
    border: '#EAEAEA',
    background: '#F2F3F7',
    disabledBg: '#F3F5F8',
    disabledText: '#A5B1CA',
    table: '#F3F8FF',
    graph: '#D4DAE6',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '22px',
    '3xl': '24px',
    '4xl': '28px',
    '5xl': '40px',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    bold: '700',
    extraBold: '800',
  },
});

export const vars = { ...commonVars };