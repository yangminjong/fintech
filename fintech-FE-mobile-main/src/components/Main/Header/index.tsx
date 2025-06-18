import * as styles from '@/styles/Main.css';
import LogoSide from '@/assets/img/logo-side.svg?react'
import BellIcon from '@/assets/img/bell-icon.svg?react'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}><LogoSide/></div>
      <div className={styles.rightSpace}><BellIcon/></div>
    </header>
  );
};

export default Header;
