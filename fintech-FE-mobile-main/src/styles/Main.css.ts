import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  paddingBottom: '80px',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 20px',
  height: '48px',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e5e7eb',
  position: 'sticky',
  top: 0,
  zIndex: 10,
});

export const logo = style({
  fontSize: '24px',
});

export const title = style({
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#111827',
});

export const rightSpace = style({
  width: '24px', // 오른쪽 공간 확보용 (아이콘 자리)
});

export const cardWrapper = style({
  padding: '16px 0',
  display: 'flex',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  WebkitOverflowScrolling: 'touch',
});

export const scrollArea = style({
  display: 'flex',
  gap: '12px',
  padding: '0 20px',
});

export const card = style({
  position: 'relative',
  flexShrink: 0,
  cursor: 'pointer',
});

export const cardInner = style({
  width: '100%',
  height: '100%',
  position: 'relative',
});


export const selected = style([
  card,
  {
    border: '3px solid #60A5FA',
  },
]);

export const cardLabel = style({
  position: 'absolute',
  top: '12px',
  right: '16px',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#fff',
  zIndex: 2,
});

export const cardNumber = style({
  position: 'absolute',
  bottom: '30px',
  left: '16px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#fff',
  zIndex: 2,
});

export const cardActionWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '12px',
  padding: '0 20px 16px',
});

const baseButton = {
  flex: 1,
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  fontSize: '14px',
  fontWeight: 'bold',
  borderRadius: '12px',
  border: 'none',
  cursor: 'pointer',
};

export const cardAddButton = style({
  ...baseButton,
  backgroundColor: '#18254C',
  color: '#ffffff',
});

export const cardManageButton = style({
  ...baseButton,
  backgroundColor: '#ffffff',
  color: '#6B7280',
  border: '1px solid #D1D5DB',
});


export const historyWrapper = style({
  padding: '20px',
});

export const historyHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
});

export const historyTitle = style({
  fontSize: '16px',
  fontWeight: 'bold',
});

export const viewAllHistory = style({
  fontSize: '14px',
  color: '#3B82F6',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

export const historyList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const historyItem = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F9FAFB', // 이미지의 배경색에 맞춰 조정
  padding: '16px', // 이미지와 유사하게 패딩 조정
  borderRadius: '12px', // 이미지와 유사하게 둥근 모서리 조정
  boxShadow: '0 1px 3px rgba(0,0,0,0.05)', // 그림자 효과 추가 (선택 사항)
  gap: '16px', // 로고와 텍스트 사이 간격
});

export const historyCardLogoContainer = style({
  width: '48px', // 로고 컨테이너 크기
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px', // 로고 컨테이너 둥근 모서리
  overflow: 'hidden', // 로고가 컨테이너를 넘어가지 않도록
  backgroundColor: '#000000', // 현대카드 로고 배경색 (이미지 기반)
});

export const historyCardLogo = style({
  width: '100%',
  height: 'auto',
  display: 'block', // 인라인 요소의 불필요한 공백 제거
});

export const historyDetails = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between', // 카드 정보와 금액/날짜를 양 끝으로 정렬
  alignItems: 'center', // 세로 중앙 정렬
});

export const historyCardInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px', // 현대카드, 승인완료 텍스트 사이 간격
});

export const historyCardName = style({
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#111827',
});

export const historyApprovalStatus = style({
  fontSize: '13px',
  color: '#6B7280',
});

export const historyAmountAndDate = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end', // 금액과 날짜를 오른쪽으로 정렬
  gap: '4px', // 금액과 날짜 텍스트 사이 간격
});

export const historyAmountText = style({
  fontSize: '18px', // 금액 폰트 크기 조정
  fontWeight: 'bold',
  color: '#111827',
});

export const historyDateText = style({
  fontSize: '13px', // 날짜 폰트 크기 조정
  color: '#6B7280',
});

export const historyLoading = style({
  padding: '12px',
  textAlign: 'center',
  color: '#6B7280',
});

export const historyError = style({
  padding: '12px',
  textAlign: 'center',
  color: '#EF4444',
});



export const bottomNav = style({
  width : '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'transparent', // 배경 SVG가 보이도록 투명하게 설정
  zIndex: 10,
});

export const bottomNavBackground = style({
  position: 'absolute',
  bottom: -10,
  left: 0,
  width : '100%',
  zIndex: -1, // 다른 요소들 뒤에 위치
});

export const bottomNavItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0',
  gap: '4px',
  flex: 1, // 공간을 균등하게 분배
});

export const bottomNavIcon = style({
  color: '#6B7280', // 기본 아이콘 색상
  selectors: {
    [`${bottomNavItem}:hover &`]: {
      color: '#111827', // 호버 시 색상 변경 (선택된 상태에 따라 변경 가능)
    },
    // 활성 상태에 따른 색상 변경은 라우터 상태에 따라 컴포넌트에서 동적으로 적용하는 것이 좋습니다.
  },
});

export const bottomNavText = style({
  fontSize: '14px',
  color: '#6B7280', // 기본 텍스트 색상
  selectors: {
    [`${bottomNavItem}:hover &`]: {
      color: '#111827', // 호버 시 색상 변경
    },
  },
});

export const qrCodeButton = style({
  position: 'relative', // 중앙 정렬을 위해 relative로 변경
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  transform: 'translateY(-20px)', // 이미지 위치에 따라 조절
  zIndex: 11,
});

export const qrCodeButtonIcon = style({
  width: '100%',
  height: '100%',
});
