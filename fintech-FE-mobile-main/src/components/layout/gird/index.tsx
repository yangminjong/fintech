import { CSSProperties, ReactNode } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';
import { grid } from '@/components/layout/gird/grid.css';

type GridVariants = RecipeVariants<typeof grid>;

type GridProps = GridVariants & {
  children?: ReactNode;
  gridColumns: number;
  gap?: string;
  style?: CSSProperties;
};

const Grid = (props: GridProps) => {
  const { children, gridColumns = 1, gap, style, ...variants } = props;

  return (
    <div
      className={grid(variants)}
      style={{
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
