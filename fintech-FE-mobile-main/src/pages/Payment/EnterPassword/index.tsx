import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PasswordKeypad from '@/components/PasswordKeypad';
import * as styles from '@/styles/Payment.css';
import { mockData } from '@/api/payments';
import { card } from '@/api/card';

const EnterPassword = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const { store, amount, cardNumber } = location.state;

  const correctPassword = card.get(cardNumber)?.paymentPassword;

  useEffect(() => {
    if (password.length === 6) {
      setTimeout(() => {
        if (password === correctPassword) {
          if (!store || !amount) {
            navigate('/payment/fail', { replace: true });
          } else {
            const today = new Date();
            const year = today.getFullYear().toString();
            const month = (today.getMonth() + 1).toString().padStart(2, '0');
            const day = today.getDate().toString().padStart(2, '0');
            const dateStr = `${year}-${month}-${day}`;

            mockData.push({
              id: '3',
              date: dateStr,
              store: store,
              amount: amount,
            });
            navigate('/payment/success', { replace: true });
          }
        } else {
          alert('비밀번호가 일치하지 않습니다.');
          setPassword('');
        }
      }, 300);
    }
  }, [password]);

  return (
    <div className={styles.passwordContainer}>
      <h2 className={styles.passwordTitle}>결제 비밀번호 입력</h2>

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
};

export default EnterPassword;
