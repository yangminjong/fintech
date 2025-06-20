
import * as styles from '@/styles/Login.css';
import { auth } from '@/api/auth';
import { useAuthStore } from '@/store/useAuthStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import Flex from '@/components/layout/flex';
import LogoMain from '@/assets/img/logo-main.svg?react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await auth.login(email, password);
      
      // 사용자 정보를 가져와서 스토어에 저장
      const userInfo = await auth.getUserInfo();
      setUser({ email: userInfo.email, name: userInfo.name });
      
      alert('로그인 성공!');
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Login failed:', error);
      alert('로그인 실패! 이메일과 비밀번호를 확인해주세요.');
    }
  };

  return (

    <div className={styles.container}>
      <LogoMain/>

      <form className={styles.form} onSubmit={handleLogin}>
        <Flex direction={'column'} grow={'wFull'} gap={'8px'}>
          <Label htmlFor="rememberMe">아이디</Label>
          <input
            className={styles.input}
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Flex>

        <Flex direction={'column'} grow={'wFull'} gap={'8px'}>
          <Label htmlFor="rememberMe">비밀번호</Label>
        <input
          className={styles.input}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </Flex>

        <button type="submit" className={styles.button}>
          로그인
        </button>
      </form>
      <button className={styles.secondaryButton} onClick={() => navigate('/signup')}>
        회원가입
      </button>
    </div>
  );
};

export default Login;
