import PasswordKeypad from '@/components/PasswordKeypad';
import * as styles from '@/styles/Payment.css';
import { useEffect, useState } from 'react';

type PasswordInputProps = {
  onSubmit: (password: string) => void;
};

export default function PasswordInput({ onSubmit }: PasswordInputProps) {
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (password.length === 6) {
      onSubmit(password);
    }
  }, [password]);

  return (
    <div className={styles.passwordContainer}>
      <h2 className={styles.passwordTitle}>결제 비밀번호 등록</h2>

      <div className={styles.passwordInputBox}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`${styles.passwordDigit} ${password.length > i ? styles.passwordFilled : ''}`}
          />
        ))}
      </div>

      <PasswordKeypad
        onInput={(value) => {
          if (value === 'backspace') {
            setPassword((prev) => prev.slice(0, -1));
          } else if (password.length < 6) {
            setPassword((prev) => prev + value);
          }
        }}
      />
    </div>
  );
}
