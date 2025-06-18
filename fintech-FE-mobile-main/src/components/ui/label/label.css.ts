import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const label = recipe({
  base: {
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.medium,
    lineHeight: '1',
  },
  variants: {
    size: {
      sm: { fontSize: vars.fontSize.xs },
      md: { fontSize: vars.fontSize.sm },
      lg: { fontSize: vars.fontSize.md },
    },
    variant: {
      default: { color: vars.color.disabledText },
      error: { color: vars.color.red },
      success: { color: vars.color.green },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});
