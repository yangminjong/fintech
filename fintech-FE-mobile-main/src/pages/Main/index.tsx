import BottomNav from '@/components/Main/BottomNav';
import CardActions from '@/components/Main/CardActions';
import CardSlider from '@/components/CardSlider';
import Header from '@/components/Main/Header';
import RecentHistory from '@/components/Main/RecentHistory';
import * as styles from '@/styles/Main.css';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <CardSlider selectable={false} selectedCardNumber="" onSelected={() => {}} />
      <CardActions />
      <RecentHistory />
      <BottomNav />
    </div>
  );
};

export default Main;
