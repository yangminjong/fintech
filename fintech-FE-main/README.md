# 열정페이 SDK

결제 기능을 쉽게 통합할 수 있는 JavaScript/TypeScript SDK입니다.

## 지원 환경

### 데스크톱 브라우저

| 브라우저 | 최소 버전 |
| -------- | --------- |
| Chrome   | 84 이상   |
| Edge     | 84 이상   |
| Firefox  | 79 이상   |
| Safari   | 14 이상   |

### 모바일 환경

| 플랫폼  | 브라우저 | 최소 버전 |
| ------- | -------- | --------- |
| iOS     | Safari   | 14 이상   |
| Android | Chrome   | 84 이상   |

## 기술 요구사항

- ECMAScript 2020 (ES2020) 이상을 지원하는 환경
- 모던 웹 브라우저 (위 지원 환경 참고)
- HTTPS 프로토콜 사용 필수

## 주의사항

- Internet Explorer는 지원하지 않습니다.
- 보안과 안정성을 위해 항상 최신 버전의 브라우저 사용을 권장합니다.
- 모바일 웹뷰에서 사용 시, 위 지원 환경을 충족하는지 확인이 필요합니다.

## 개발 환경 설정

- pnpm workspace를 사용한 모노레포로 구성되어 있어요.
- 최초 실행 시 pnpm 설치부터 진행해주세요.
- 아래 명령어는 'fintech-FE-sdk 루트'에서 실행해주시면 됩니다.
- 로컬에서 개발할 때
  1. sdk를 빌드 후 serve로 띄워놓고
  2. 새로운 터미널에서 demo를 실행해주세요

```bash
# 의존성 설치
pnpm install

# SDK
pnpm sdk build
pnpm sdk serve

# Demo (새로운 터미널에서 실행)
pnpm run demo
```

## 프로젝트 구조

```
packages/
  ├── sdk/          # SDK
  └── demo/     # SDK 사용 예제
```
