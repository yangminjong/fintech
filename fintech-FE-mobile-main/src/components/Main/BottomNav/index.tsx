import * as styles from '@/styles/Main.css';
import { useNavigate } from 'react-router-dom';
import {
  bottomNav,
  bottomNavBackground,
  bottomNavIcon,
  bottomNavItem,
  bottomNavText,
  qrCodeButton, qrCodeButtonIcon,
} from '@/styles/Main.css';

import BottomNavBackground from '@/assets/img/bottom-nav.svg?react';
import HomeIcon from '@/assets/img/icon-home.svg?react';
import QrButtonIcon from '@/assets/img/qr-button.svg?react';
import UserIcon from '@/assets/img/icon-user.svg?react';

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <nav className={bottomNav}>
      <BottomNavBackground className={bottomNavBackground} />
      <button
        className={bottomNavItem}
        onClick={() => {
          navigate('/');
        }}
      >
        <HomeIcon className={bottomNavIcon} />
        <span className={bottomNavText}>홈</span>
      </button>
      <button
        className={qrCodeButton}
        onClick={() => {
          navigate('/qr');
        }}
      >
        <QrButtonIcon className={qrCodeButtonIcon} />
      </button>
      <button
        className={bottomNavItem}
        onClick={() => {
          navigate('/my');
        }}
      >
        <UserIcon className={bottomNavIcon} />
        <span className={bottomNavText}>마이</span>
      </button>
    </nav>
  );
};

export default BottomNav;