import { useState, useEffect } from 'react';
import { card, CardResponse } from '@/api/card';
import * as styles from '@/styles/Main.css';
import CardBlack from '@/assets/img/card-black.svg?react'
import CardBlue from '@/assets/img/card-blue.svg?react'

interface Props {
  selectable: boolean;
  selectedCardNumber: string;
  onSelected: (cardNumber: string) => void;
}

const CardSlider = ({ selectable, selectedCardNumber, onSelected }: Props) => {
  const [cards, setCards] = useState<CardResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        setError(null);
        const cardList = await card.getAll();
        setCards(cardList);
      } catch (err) {
        console.error('카드 목록 조회 실패:', err);
        setError('카드 정보를 불러올 수 없습니다');
        // 개발 중에는 빈 배열로 설정하여 UI가 깨지지 않도록 함
        setCards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return (
      <div className={styles.cardWrapper}>
        <div className={styles.scrollArea}>
          <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
            카드 정보를 불러오는 중...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.cardWrapper}>
        <div className={styles.scrollArea}>
          <div style={{ padding: '20px', textAlign: 'center', color: '#ff6b6b' }}>
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className={styles.cardWrapper}>
        <div className={styles.scrollArea}>
          <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
            등록된 카드가 없습니다
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.scrollArea}>
        {cards.map((cardInfo) => {
          // API 응답의 maskedCardNumber 사용 (예: "1234-****-****-5678")
          const isSelected = selectable && selectedCardNumber === cardInfo.cardToken;

          // 카드 종류 판단 (maskedCardNumber의 첫 4자리로 판단)
          const isBlack = cardInfo.maskedCardNumber.startsWith('1234');
          const cardTypeLabel = isBlack ? 'The Black' : 'The Blue';

          return (
            <div
              key={cardInfo.cardToken}
              className={isSelected ? styles.selected : styles.card}
              onClick={() => {
                if (selectable) {
                  onSelected(cardInfo.cardToken);
                }
              }}
            >
              <div className={styles.cardInner}>
                {isBlack ? <CardBlack /> : <CardBlue />}
                <span className={styles.cardLabel}>{cardTypeLabel}</span>
                <span className={styles.cardNumber}>
                  {cardInfo.maskedCardNumber}
                </span>
                <span style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
                  {cardInfo.cardCompany}
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