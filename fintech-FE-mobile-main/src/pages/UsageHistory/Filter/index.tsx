import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as styles from '@/styles/HistoryFilter.css';

export interface PaymentFilter {
  startDate?: string; // YYYY-MM-DD
  endDate?: string;
  sortBy?: 'date' | 'amount';
}

export const defaultFilter: PaymentFilter = {
  sortBy: 'date',
};

const Filter = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filter, setFilter] = useState({
    startDate: '',
    endDate: '',
    sortBy: 'date',
  });

  useEffect(() => {
    setFilter({
      startDate: searchParams.get('startDate') || '',
      endDate: searchParams.get('endDate') || '',
      sortBy: (searchParams.get('sortBy') as 'date' | 'amount') || 'date',
    });
  }, [searchParams]);

  const handleApply = () => {
    const params = new URLSearchParams();
    if (filter.startDate) params.set('startDate', filter.startDate);
    if (filter.endDate) params.set('endDate', filter.endDate);
    if (filter.sortBy) params.set('sortBy', filter.sortBy);
    navigate(`/history?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>필터 설정</h2>

      <div>
        <div className={styles.label}>조회 기간</div>
        <div className={styles.dateRow}>
          <input
            type="date"
            className={styles.input}
            value={filter.startDate}
            onChange={(e) => setFilter((f) => ({ ...f, startDate: e.target.value }))}
          />
          <span>~</span>
          <input
            type="date"
            className={styles.input}
            value={filter.endDate}
            onChange={(e) => setFilter((f) => ({ ...f, endDate: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <div className={styles.label}>정렬 기준</div>
        <select
          className={styles.select}
          value={filter.sortBy}
          onChange={(e) => setFilter((f) => ({ ...f, sortBy: e.target.value }))}
        >
          <option value="date">날짜순</option>
          <option value="amount">금액순</option>
        </select>
      </div>

      <div className={styles.buttonGroup}>
        <button
          className={styles.resetButton}
          onClick={() => setFilter({ startDate: '', endDate: '', sortBy: 'date' })}
        >
          초기화
        </button>
        <button className={styles.applyButton} onClick={handleApply}>
          조회
        </button>
      </div>
    </div>
  );
};

export default Filter;
