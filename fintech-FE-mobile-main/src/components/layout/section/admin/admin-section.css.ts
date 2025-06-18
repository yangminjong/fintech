import { flex } from '@/components/layout/flex/flex.css';
import { style } from '@vanilla-extract/css';

export const content = style([
  flex({ direction: 'column' }),
  {
    position: 'relative',
    flex: 1,
    height: '100%',
    overflowX: 'auto',
    overflowY: 'auto',
    padding: `70px 73px 20px 73px`,
  },
]);
