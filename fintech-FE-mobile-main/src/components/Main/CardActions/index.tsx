import * as styles from '@/styles/Main.css';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@/assets/img/add-icon.svg?react'
import OptionIcon from '@/assets/img/option-icon.svg?react'

const CardActions = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.cardActionWrapper}>
      <button
        className={styles.cardAddButton}
        onClick={() => navigate('/register')}
      >
        <AddIcon />
        <span>카드 추가하기</span>
      </button>

      <button className={styles.cardManageButton}>
        <OptionIcon />
        <span>카드 관리하기</span>
      </button>
    </div>

  );
};

export default CardActions;
