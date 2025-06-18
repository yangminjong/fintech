const SdkUsageGuideSection = () => {


  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">⚙️ SDK 사용 방법</h2>
      <p className="text-gray-700">SDK를 초기화하고 결제를 요청하는 기본 흐름은 다음과 같습니다:</p>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
    {`const sdk = await PassionPaySDK(sdkKey);
      await sdk.requestPayment({
        amount,
        merchant_order_id,
        merchant_id,
        productName
      });`}
  </pre>
    </section>
  )
}

export default SdkUsageGuideSection