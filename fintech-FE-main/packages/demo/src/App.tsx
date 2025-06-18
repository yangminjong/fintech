import SdkIntroSection from "./components/SdkIntroSection.tsx";
import SdkUsageGuideSection from "./components/SdkUsageGuideSection.tsx";
import SdkModalGuideSection from "./components/SdkModalGuideSection.tsx";
import PaymentDemoSection from "./components/PaymentDemoSection.tsx";

function App() {


  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-10">
      {/* 왼쪽: 데모 */}
      <div>
        <PaymentDemoSection/>
      </div>

      {/* 오른쪽: 설명 */}
      <div className="space-y-12">
        <SdkIntroSection/>
        <SdkUsageGuideSection/>
        <SdkModalGuideSection/>
      </div>
    </main>
  );
}

export default App;
