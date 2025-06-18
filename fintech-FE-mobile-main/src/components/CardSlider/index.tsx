import { cardInfos } from '@/api/card';
import * as styles from '@/styles/Main.css';
import CardBlack from '@/assets/img/card-black.svg?react'
import CardBlue from '@/assets/img/card-blue.svg?react'
interface Props {
  selectable: boolean;
  selectedCardNumber: string;
  onSelected: (cardNumber: string) => void;
}

const CardSlider = ({ selectable, selectedCardNumber, onSelected }: Props) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.scrollArea}>
        {cardInfos.map((card) => {
          const isSelected = selectable && selectedCardNumber === card.cardNumber;

          // 카드 종류 판단 (예: 번호에 따라 분기)
          const isBlack = card.cardNumber.startsWith('1234'); // 예시 조건
          const cardTypeLabel = isBlack ? 'The Black' : 'The Blue';

          return (
            <div
              key={card.cardNumber}
              className={isSelected ? styles.selected : styles.card}
              onClick={() => {
                if (selectable) {
                  onSelected(card.cardNumber);
                }
              }}
            >
              <div className={styles.cardInner}>
                {isBlack ? <CardBlack /> : <CardBlue />}
                <span className={styles.cardLabel}>{cardTypeLabel}</span>
                <span className={styles.cardNumber}>
                  {card.cardNumber.slice(0, 4) + '- **** - **** - ****'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSlider;