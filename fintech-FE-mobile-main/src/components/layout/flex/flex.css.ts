import { recipe } from '@vanilla-extract/recipes';

export const flex = recipe({
  base: {
    display: 'flex',
    position: 'relative',
  },
  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },
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
      full: { flex: 1, width: '100%', height: '100%' },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'start',
    justify: 'start',
  },
});
