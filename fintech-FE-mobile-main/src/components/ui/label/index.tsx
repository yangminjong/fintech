import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { label } from './label.css';
import { cx } from '@/util/cx';

type LabelVariants = NonNullable<Parameters<typeof label>[0]>;

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  variant?: LabelVariants['variant'];
  size?: LabelVariants['size'];
}

/**
 * LabelPrimitive
 * - asChild prop 지원: 컴포넌트의 렌더링 요소를 다른 요소로 교체할 수 있게 해줍니다.
 * - 접근성(ARIA) 속성 자동 처리
 * - ref 전달 지원
 * - 기본 HTML label의 모든 기능 포함
 *@example
  // 1. 커스텀 스타일링이 필요한 경우
  const CustomForm = () => {
    return (
      <div>
        <Label asChild>
          <StyledSpan>
            이메일 주소
          </StyledSpan>
        </Label>
        <input type="email" />
      </div>
    );
  };

  // 2. 다른 컴포넌트와 통합할 때
  const FormField = () => {
    return (
      <Label asChild>
        <Tooltip content="이메일을 입력하세요">
          <span>이메일</span>
        </Tooltip>
      </Label>
    );
  };

  // 3. 레이아웃이나 구조가 필요한 경우
  const FieldWithIcon = () => {
    return (
      <Label asChild>
        <div>
          <EmailIcon />
          <span>이메일 주소</span>
        </div>
      </Label>
    );
  };
 */
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, size, ...props }, ref) => (
    <LabelPrimitive.Root ref={ref} className={cx(label({ variant, size }), className)} {...props} />
  )
);

Label.displayName = LabelPrimitive.Root.displayName;
