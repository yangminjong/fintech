import BottomNav from '@/components/Main/BottomNav';
import Header from '@/components/Main/Header';
import { useAuthStore } from '@/store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import * as styles from '@/styles/My.css';

const My = () => {
  const auth = useAuthStore();
  const user = auth.user;
  const clearUser = auth.clearUser;

  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.infoBox}>
        <span className={styles.name}>{user?.name}</span>
        <span className={styles.email}>{user?.email}</span>
      </div>
      <div>
        <button
          className={styles.logout}
          onClick={() => {
            if (!window.confirm('로그아웃 하시겠습니까?')) {
              return;
            }

            clearUser();
            navigate('/login', { replace: true });
          }}
        >
          로그아웃
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default My;
