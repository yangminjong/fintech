import { useQuery } from '@tanstack/react-query';
import { fetchPayments } from '@/api/payments';
import { PaymentItemType } from '@/pages/UsageHistory';
import { defaultFilter } from '@/pages/UsageHistory/Filter';
import * as styles from '@/styles/Main.css';
import { useNavigate } from 'react-router-dom';
import HundaiLogo from '@/assets/img/hundai-logo.svg?react';
import {
  historyAmountAndDate,
  historyAmountText, historyApprovalStatus, historyCardInfo, historyCardLogoContainer, historyCardName,
  historyDateText, historyDetails, historyError, historyHeader, historyItem, historyList,
  historyLoading, historyTitle,
  historyWrapper, viewAllHistory,
} from '@/styles/Main.css'; // 현대카드 로고 SVG import

const RecentHistory = () => {
  const navigate = useNavigate();

  const {
    data: payments,
    isLoading,
    error,
  } = useQuery<PaymentItemType[]>({
    queryKey: ['payments', defaultFilter],
    queryFn: () => fetchPayments(defaultFilter),
  });

  const recentPayments = payments?.slice(0, 2) ?? []; // 최근 2개만 표시

  // 날짜와 시간을 "YYYY.MM.DD HH:MM" 형식으로 포맷팅하는 함수
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  return (
    <section className={historyWrapper}>
      <div className={historyHeader}>
        <span className={historyTitle}>최근 이용 내역</span>
        <button
          className={viewAllHistory}
          onClick={() => {
            navigate('/history');
          }}
        >
          전체보기 &gt;
        </button>
      </div>

      {isLoading && <div className={historyLoading}>불러오는 중...</div>}
      {error && <div className={historyError}>이용 내역을 불러올 수 없습니다.</div>}

      {!isLoading && !error && (
        <ul className={historyList}>
          {recentPayments.map((item) => (
            <li key={item.id} className={historyItem}>
              <div className={historyCardLogoContainer}>
                <HundaiLogo className={styles.historyCardLogo} />
              </div>
              <div className={historyDetails}>
                <div className={historyCardInfo}>
                  <span className={historyCardName}>현대카드</span> {/* 고정 텍스트 */}
                  <span className={historyApprovalStatus}>승인완료</span>
                </div>
                <div className={historyAmountAndDate}>
                  <span className={historyAmountText}>{item.amount.toLocaleString()}원</span>
                  <span className={historyDateText}>{formatDateTime(item.date)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {/* 데이터가 없을 경우 메시지 추가 (선택 사항) */}
      {!isLoading && !error && recentPayments.length === 0 && (
        <div className={historyLoading}>최근 이용 내역이 없습니다.</div>
      )}
    </section>
  );
};

export default RecentHistory;