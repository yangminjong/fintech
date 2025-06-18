import type { PaymentReqBody, PaymentResData } from "./type";

export async function getTransactionToken(
  reqBody: PaymentReqBody
): Promise<PaymentResData> {
  const response = await fetch(
    `http://3.39.111.97:8081/payment/request`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to get transaction token");
  }

  return response.json();
}
