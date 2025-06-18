import { useRef, useState, useEffect } from 'react';
import * as styles from '@/styles/Register.css';

interface Props {
  value: string;
  onChange: (cardNumber: string) => void;
}

const formatCardNumber = (value: string) => {
  return value
    .replace(/\D/g, '') // 숫자만 남김
    .substring(0, 16) // 최대 16자리
    .replace(/(.{4})/g, '$1 ') // 4자리마다 공백
    .trim(); // 마지막 공백 제거
};

export function CardNumberInput({ value, onChange }: Props) {
  const [displayValue, setDisplayValue] = useState(formatCardNumber(value));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '').slice(0, 16);
    onChange(rawValue);
    setDisplayValue(formatCardNumber(rawValue));
  };

  return (
    <input
      value={displayValue}
      inputMode="numeric"
      placeholder="카드 번호 입력 (16자리)"
      className={styles.cardNumberInput}
      onChange={handleChange}
    />
  );
}
