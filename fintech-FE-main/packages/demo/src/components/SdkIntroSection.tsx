const SdkIntroSection = () => {


  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">💡 PassionPay SDK 소개</h2>
      <p className="text-gray-700">
        PassionPay SDK는 간편하게 QR 결제를 구현할 수 있는 JavaScript 라이브러리입니다.
      </p>
      <p className="text-gray-700">
        SDK Key는 아래 링크에서 발급받아 사용해주세요.
      </p>
      <a
        href="https://fintech-backoffice.web.app/merchant/api-keys"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 underline"
      >
        👉 SDK Key 발급하러 가기
      </a>
    </section>

  )
}

export default SdkIntroSection