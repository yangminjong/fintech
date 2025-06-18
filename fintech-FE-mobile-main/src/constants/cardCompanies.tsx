import ShinhanIcon from '@/assets/bank/shinhan.svg?react';
import WooriIcon from '@/assets/bank/woori.svg?react';
import KakaoIcon from '@/assets/bank/kakao.svg?react';
import TossIcon from '@/assets/bank/toss.svg?react';
import HanaIcon from '@/assets/bank/hana.svg?react';
import KbIcon from '@/assets/bank/kb.svg?react';
import NhIcon from '@/assets/bank/nh.svg?react';
import IbkIcon from '@/assets/bank/ibk.svg?react';
import KBankIcon from '@/assets/bank/kbank.svg?react';
import { ReactElement } from 'react';

type CardCompany = {
  name: string;
  icon: ReactElement;
};

export const cardCompanies: CardCompany[] = [
  { name: '신한은행', icon: <ShinhanIcon /> },
  { name: '우리은행', icon: <WooriIcon /> },
  { name: '카카오뱅크', icon: <KakaoIcon /> },
  { name: '토스뱅크', icon: <TossIcon /> },
  { name: '하나은행', icon: <HanaIcon /> },
  { name: 'KB국민은행', icon: <KbIcon /> },
  { name: 'NH농협은행', icon: <NhIcon /> },
  { name: 'IBK기업은행', icon: <IbkIcon /> },
  { name: '케이뱅크', icon: <KBankIcon /> },
];
