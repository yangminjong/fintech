import * as styles from '@/styles/Payment.css';
import { useNavigate } from 'react-router-dom';
import SuccessIcon from '@/assets/img/success-icon.svg?react';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.resultContainer}>
      <div className={styles.messageContainer}>
        <SuccessIcon />
        <h1 className={styles.resultMessage}>결제 완료</h1>
        <div>열정페이에서</div>
        <div>결제가 안전하게 완료되었습니다.</div>
      </div>
      <button
        className={styles.homeButton}
        onClick={() => {
          navigate('/');
        }}
      >
        확인
      </button>
    </div>
  );
};

export default Success;
