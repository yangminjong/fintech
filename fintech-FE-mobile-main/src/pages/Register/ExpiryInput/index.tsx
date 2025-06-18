import { useRef, useState } from 'react';
import * as styles from '@/styles/Register.css';

interface Props {
  value: string;
  onChange: (expiry: string) => void;
}

const formatExpiry = (value: string) => {
  const digits = value.replace(/\D/g, '').substring(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};

export function ExpiryInput({ value, onChange }: Props) {
  const [displayValue, setDisplayValue] = useState(formatExpiry(value));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '').slice(0, 4);
    onChange(rawValue);
    setDisplayValue(formatExpiry(rawValue));
  };

  return (
    <input
      value={displayValue}
      inputMode="numeric"
      placeholder="유효기간 입력 (MM/YY)"
      className={styles.expiryBlock}
      onChange={handleChange}
    />
  );
}
