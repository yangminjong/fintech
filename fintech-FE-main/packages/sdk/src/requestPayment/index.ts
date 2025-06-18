import { showQRCode } from "../components/qrCodeModal";
import { generateQR } from "./generateQR";
import type { PaymentReqBody } from "./type";


/**
 * 결제 요청 정보를 받아 QR 코드를 생성하고 화면에 표시합니다.
 *
 * @param reqBody - 결제 요청에 필요한 정보가 담긴 객체입니다.
 *
 * @throws {Error} QR 코드 생성 또는 표시 과정에서 오류가 발생하면 예외를 다시 발생시킵니다.
 */
export async function requestPayment(reqBody: PaymentReqBody) {
  try {
    console.log("requestPayment", reqBody);
    const qrCodeUrl = await generateQR(reqBody);

    showQRCode({qrCodeUrl, productName : reqBody?.productName || '', amount: reqBody.amount   });

    // TODO: TransactionToken 을 받는 url 나오면 확인
    // const tokenResponse = await getTransactionToken(reqBody);
    // const qrCodeUrl = await generateQR(tokenResponse.transaction_token);
    //
    // showQRCode(qrCodeUrl);
  } catch (error) {
    console.error("Payment process failed:", error);
    throw error;
  }
}
