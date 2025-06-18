// TODO : SDK 타입 npm 패키지 생성 후 삭제
// sdk > src > types.d.ts 와 동기화 되어야하는 이유는 아래와 같습니다.
// CDN으로 로드되는 스크립트는 JavaScript 런타임에서 실행되는 코드만 포함하고,
// TypeScript 타입 정보는 개발 시점에 필요한 별도의 정보이기 때문에,
// 이를 사용하는 프로젝트에서 타입을 다시 선언하거나 타입 패키지를 설치해야합니다.
// 하지만 MVP임을 고려하여 TODO로 남겨둠
interface PaymentRequestBody {
  amount: number;
  merchant_order_id: string;
  merchant_id: string;
  productName : string;
}

export interface PassionPaySDKInstance {
  requestPayment: (reqBody: PaymentRequestBody) => Promise<void>;
}

declare global {
  const PassionPaySDK: (
    clientKey: string
  ) => Promise<PassionPaySDKInstance | null>;
  type PassionPaySDKInstance = PassionPaySDKInstance;
}
