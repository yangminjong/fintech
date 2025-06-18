import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { CardNumberInput } from './CardNumberInput';
import { ExpiryInput } from './ExpiryInput';
import * as styles from '@/styles/Register.css';
import { CardForm, card } from '@/api/card';
import PasswordInput from './PasswordInput';
import { useNavigate } from 'react-router-dom';
import BackIcon from '@/assets/img/back-icon.svg?react';
import { useCardRegisterStore } from '@/store/useCardRegisterStore';
import { cardCompanies } from '@/constants/cardCompanies';

const Register = () => {
  const navigate = useNavigate();
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const { selectedCardCompany, isDrawerOpen, setCardCompany, openDrawer, closeDrawer, reset } =
    useCardRegisterStore();

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const [form, setForm] = useState<CardForm>({
    cardNumber: '',
    expiry: '',
    birth: '',
    password2Digits: '',
    cvc: '',
    paymentPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numeric = e.target.value.replace(/\D/g, '');
    setForm({ ...form, [e.target.name]: numeric });
  };

  const mutation = useMutation({
    mutationFn: (data: CardForm) => {
      return fetch('/api/card', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCardCompany) {
      alert('카드사를 선택해주세요.');
      return;
    }

    if (form.cardNumber.length !== 16) {
      alert('카드번호를 입력해주세요.');
      return;
    }
    if (form.expiry.length !== 4) {
      alert('유효기간을 입력해주세요.');
      return;
    }
    if (form.birth.length !== 6) {
      alert('생년월일을 입력해주세요.');
      return;
    }
    if (form.password2Digits.length !== 2) {
      alert('카드 비밀번호 앞 2자리를 입력해주세요.');
      return;
    }
    if (form.cvc.length !== 3) {
      alert('cvc 번호를 입력해주세요.');
      return;
    }

    setShowPasswordInput(true);
  };

  return (
    <div>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate('/')}>
          <BackIcon />
        </button>
        <div className={styles.headerName}>카드 등록하기</div>
        <div></div>
      </header>
      {!showPasswordInput ? (
        <div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <button type="button" onClick={openDrawer} className={styles.cardCompanyButton}>
              {selectedCardCompany ?? (
                <div className={styles.cardCompanySelectContainer}>
                  <div>카드사 선택</div>
                  <div>▼</div>
                </div>
              )}
            </button>

            <CardNumberInput
              value={form.cardNumber}
              onChange={(val) => {
                setForm({ ...form, cardNumber: val });
              }}
            />

            <ExpiryInput
              value={form.expiry}
              onChange={(val) => {
                setForm({ ...form, expiry: val });
              }}
            />

            <input
              placeholder="생년월일 입력 (6자리)"
              type="password"
              name="birth"
              inputMode="numeric"
              maxLength={6}
              value={form.birth}
              onChange={handleChange}
              className={styles.input}
            />

            <input
              placeholder="카드 비밀번호 앞 2자리 입력"
              type="password"
              name="password2Digits"
              inputMode="numeric"
              maxLength={2}
              value={form.password2Digits}
              onChange={handleChange}
              className={styles.input}
            />

            <input
              placeholder="CVC 입력 (3자리)"
              type="password"
              name="cvc"
              inputMode="numeric"
              maxLength={3}
              value={form.cvc}
              onChange={handleChange}
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              다음
            </button>
          </form>
        </div>
      ) : (
        <PasswordInput
          onSubmit={(value) => {
            const updatedForm = { ...form, paymentPassword: value };
            card.register(updatedForm);
            alert('카드 정보가 등록되었습니다.');
            navigate('/');
          }}
        />
      )}
      {isDrawerOpen ? (
        <div className={styles.drawerOverlay} onClick={closeDrawer}>
          <div className={styles.drawerContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.dragHandle} />
            <p className={styles.title}>카드사를 선택해주세요</p>
            <div className={styles.grid}>
              {cardCompanies.map((company) => (
                <button
                  key={company.name}
                  className={styles.gridItem}
                  onClick={() => setCardCompany(company.name)}
                >
                  <div>
                    {company.icon}
                    <div>{company.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Register;
