import { recipe } from '@vanilla-extract/recipes';

export const grid = recipe({
  base: {
    display: 'grid',
    position: 'relative',
  },
  variants: {
    align: {
      center: { alignItems: 'center' },
      start: { alignItems: 'flex-start' },
      end: { alignItems: 'flex-end' },
    },
    justify: {
      center: { justifyContent: 'center' },
      between: { justifyContent: 'space-between' },
      start: { justifyContent: 'flex-start' },
      end: { justifyContent: 'flex-end' },
    },
    grow: {
      wFull: { width: '100%' },
      hFull: { height: '100%' },
    },
  },
  defaultVariants: {
    align: 'start',
    justify: 'start',
  },
});
