import QRCode from "qrcode";
import type {PaymentReqBody} from "./type";

export async function generateQR(reqBody : PaymentReqBody) {
  // reqBody(json) 를 text 로 바꿔서 넣어줘야 할듯
  const reqBodyText = JSON.stringify(reqBody);
  const qrCodeUrl = await QRCode.toDataURL(reqBodyText);

  return qrCodeUrl;
}
