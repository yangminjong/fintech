const SdkModalGuideSection = () => {


  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">🧾 결제 모달 안내</h2>
      <p className="text-gray-700">
        <code>requestPayment</code> 호출 시 QR코드가 포함된 모달이 자동으로 표시됩니다.
        <br/>
        사용자는 QR을 스캔하여 결제를 진행합니다.
      </p>

      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
    {`try {
      await passionPay.requestPayment({
        amount,
        merchant_order_id: merchantOrderId,
        merchant_id: merchantId,
        productName
      });
    } catch (error) {
      console.error("Payment failed:", error);
    }`}
  </pre>
      <p className="text-gray-700">
        결제 완료, 실패 등의 이벤트는 SDK 내부에서 처리되며, 이후 버전에서 콜백 설정 기능이 추가될 예정입니다.
      </p>
    </section>
  )
}

export default SdkModalGuideSection