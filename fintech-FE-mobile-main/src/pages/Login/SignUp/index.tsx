import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as styles from '@/styles/Signup.css';
import { auth } from '@/api/auth';
import BackIcon from '@/assets/img/back-icon.svg?react';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await auth.register({ name, phone, email, password });

    if (success) {
      alert('가입 성공!');
      navigate('/login');
    } else {
      alert('가입 실패!');
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numbersOnly = value.replace(/\D/g, '');

    if (numbersOnly.length < 4) return numbersOnly;
    if (numbersOnly.length < 7) {
      return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3)}`;
    }
    return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3, 7)}-${numbersOnly.slice(7, 11)}`;
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate('/')}>
          <BackIcon />
        </button>
        <div className={styles.headerName}>회원가입</div>
        <div></div>
      </header>

      <h1 className={styles.title}>계정정보 입력</h1>
      <div className={styles.description}>열정페이에서 사용할 계정 정보를 입력해주세요.</div>

      <form className={styles.form} onSubmit={handleSignUp}>
        <input
          className={styles.input}
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          className={styles.input}
          type="tel"
          placeholder="전화번호"
          value={formatPhoneNumber(phone)}
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/\D/g, '');
            setPhone(onlyNums);
          }}
          required
        />
        <br />
        <input
          className={styles.input}
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          className={styles.input}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" className={styles.button}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;
