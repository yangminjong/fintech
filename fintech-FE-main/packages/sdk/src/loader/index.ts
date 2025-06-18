


export interface ValidationResponse {
  valid: boolean;
  merchantName?: string;
}

export async function loader(sdkKey: string): Promise<boolean> {

  const response = await fetch("http://3.39.111.97:8081/sdk/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sdkKey }),
  });

  const json: ValidationResponse = await response.json();

  if (!response.ok || !json.valid) {
    throw new Error("[PaymentSDK] Invalid SDK key");
  }

  console.log(`[PaymentSDK] Initialized for merchant: ${json.merchantName}`);

  // initialize(key);
  return true;
}
