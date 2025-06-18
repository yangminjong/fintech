import { useMemo } from 'react';
import * as styles from '@/styles/Payment.css';

interface Props {
  onInput: (value: string) => void;
}

export default function PasswordKeypad({ onInput }: Props) {
  const keys = useMemo(() => {
    const nums = Array.from({ length: 10 }, (_, i) => String(i));
    for (let i = nums.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    return [...nums, 'backspace'];
  }, []);

  return (
    <div className={styles.passwordGrid}>
      {keys.map((key, idx) => (
        <button key={idx} className={styles.passwordKey} onClick={() => onInput(key)}>
          {key === 'backspace' ? '←' : key}
        </button>
      ))}
    </div>
  );
}
