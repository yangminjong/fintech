import {useEffect, useState} from "react";
import type {PassionPaySDKInstance} from "../type/global";

const PaymentDemoSection = () => {
  const sdkKey = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNyIsIm1lcmNoYW50TmFtZSI6Iu2MqOyKpO2KuOyXheuNsOydtO2KuOyDge2YuOuqhSIsImlhdCI6MTc0NzkzOTY1OCwiZXhwIjoxNzQ4MDI2MDU4fQ.EUHGOzCngzkfNNjGxk1l9hLksvhvV0o6GPwnlqOb56c";
  const [passionPay, setPassionPay] = useState<PassionPaySDKInstance | null>(
    null
  );

  const amount = 39800;
  const merchantOrderId = `order_${Date.now()}`;
  const merchantId = "merchant01";
  const productName = '[2PACK] 싱글 에어그램 반팔 티셔츠';

  const formatPrice = (price: number) => {
    return price.toLocaleString("ko-KR");
  };

  const handlePaymentClick = async () => {
    if (!passionPay) return;

    try {
      await passionPay.requestPayment({
        amount,
        merchant_order_id: merchantOrderId,
        merchant_id: merchantId,
        productName
      });
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  useEffect(() => {
    async function initSDK() {
      const sdk = await PassionPaySDK(sdkKey);
      setPassionPay(sdk);
    }
    initSDK();
  }, [sdkKey]);

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">🧪 실시간 결제 데모</h2>
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto max-w-md px-4">
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-lg">
          <h1 className="text-center text-2xl font-bold text-gray-900">
            무신사 결제 페이지
          </h1>

          {/* 상품 정보 섹션 */}
          <div className="space-y-4 rounded-xl border border-gray-200 p-4">
            <div className="flex items-start space-x-4">
              <div className="size-20 shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src="https://image.msscdn.net/thumbnails/images/goods_img/20220427/2518417/2518417_17406395055563_big.jpg?w=1200"
                  alt="[2PACK] 싱글 에어그램 반팔 티셔츠"
                  className="size-full object-cover object-center"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-900">
                  [2PACK] 싱글 에어그램 반팔 티셔츠
                </h3>
                <p className="mt-1 text-sm text-gray-500">화이트 / L</p>
              </div>
              <div className="text-right">
                <p className="text-base font-medium text-gray-900">
                  {formatPrice(amount)}원
                </p>
                <p className="mt-1 text-sm text-gray-500">1개</p>
              </div>
            </div>
          </div>

          {/* 결제수단 섹션 */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-600">결제수단</div>
            <div className="flex items-center space-x-2 text-lg font-semibold text-orange-500">
              <span role="img" aria-label="fire" className="text-xl">
                🔥
              </span>
              <span>열정페이</span>
            </div>
          </div>

          {/* 결제금액 섹션 */}
          <div className="space-y-3 rounded-xl bg-gray-50 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">상품금액</span>
              <span className="text-gray-900">{formatPrice(amount)}원</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">배송비</span>
              <span className="text-gray-900">0원</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-900">총 결제금액</span>
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(amount)}원
              </span>
            </div>
          </div>

          {/* 결제 버튼 */}
          <button
            onClick={handlePaymentClick}
            className="w-full rounded-xl bg-black py-4 font-bold text-white transition-colors duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            {formatPrice(amount)}원 결제하기
          </button>

          {/* 안내 문구 */}
          <p className="text-center text-xs text-gray-500">
            결제 진행 시 QR코드가 생성됩니다
          </p>
        </div>
      </div>
    </div>
    </section>
  );

}

export default PaymentDemoSection