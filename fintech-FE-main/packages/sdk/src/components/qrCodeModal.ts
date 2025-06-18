import { styles } from "./styles";
import {expiredImageBase64, logoIconBase64} from "../assets/imageBase64";

interface ShowQRCodeProps {
  qrCodeUrl: string;
  amount : number;
  productName : string;
}

interface CreateModalElements {
  onClose: () => void;
}

/**
 * 닫기 콜백이 포함된 모달 오버레이와 콘텐츠 컨테이너 요소를 생성합니다.
 *
 * @param onClose - 닫기 버튼 클릭 시 호출되는 함수입니다.
 * @returns 모달 오버레이 요소와 콘텐츠 컨테이너 요소를 포함하는 객체를 반환합니다.
 */
function createModalElements({ onClose }: CreateModalElements) {
  const modal = document.createElement("div");
  modal.style.cssText = styles.overlay;

  const modalContent = document.createElement("div");
  modalContent.style.cssText = styles.modal;

  // Header
  const header = document.createElement("div");
  header.style.cssText = styles.header;

  const closeButton = document.createElement("button");
  closeButton.innerHTML = "×";
  closeButton.style.cssText = styles.closeButton;
  closeButton.onclick = onClose;

  header.appendChild(closeButton);
  modalContent.appendChild(header);

  const content = document.createElement("div");
  content.style.cssText = styles.content;

  modalContent.appendChild(content);
  modal.appendChild(modalContent);

  return { modal, content };
}

/**
 * 결제용 QR 코드와 상품 정보를 포함한 모달을 표시합니다.
 *
 * QR 코드, 상품명, 가격, 남은 유효시간을 안내하는 모달을 화면에 띄우며, 60초 후 만료 시 만료 안내로 전환됩니다.
 *
 * @param qrCodeUrl - 결제용 QR 코드 이미지의 URL.
 * @param amount
 * @param productName
 * @remark 상품명과 가격은 현재 고정되어 있으며, 유효시간이 만료되면 QR 코드가 숨겨지고 만료 이미지를 표시합니다.
 */
export function showQRCode({ qrCodeUrl, amount , productName }: ShowQRCodeProps): void {

  const price = amount;
  const expireDate = new Date(Date.now() + 60 * 1000);

  const cleanup = () => {
    if (modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
    clearInterval(timerId);
  };

  const { modal, content } = createModalElements({ onClose: cleanup });

  // 로고
  // ✅ SVG 로고
  const logoBox = document.createElement("div");
  logoBox.style.cssText = styles.logoBox;

  const logoImage = document.createElement("img");
  logoImage.src = logoIconBase64;
  logoImage.alt = "로고";
  logoImage.style.cssText = styles.logoImage;

  logoBox.appendChild(logoImage);
  content.appendChild(logoBox);

  // 제품 정보
  const productInfoBox = document.createElement("div");
  productInfoBox.style.cssText = styles.productInfoBox;

  const productNameText = document.createElement("p");
  productNameText.textContent = productName;
  productNameText.style.cssText = styles.productName;

  const priceText = document.createElement("p");
  priceText.textContent = `${price.toLocaleString()}원`;
  priceText.style.cssText = styles.priceText;

  productInfoBox.appendChild(productNameText);
  productInfoBox.appendChild(priceText);
  content.appendChild(productInfoBox);

  // QR 안내 및 타이머
  const qrWrapper = document.createElement("div");
  qrWrapper.style.cssText = styles.qrWrapper;

  const guide = document.createElement("p");
  guide.textContent = "열정페이 앱으로 QR코드를 스캔하여 결제를 진행해주세요.";
  guide.style.cssText = styles.guide;

  const qrImage = document.createElement("img");
  qrImage.src = qrCodeUrl;
  qrImage.style.cssText = styles.qrImage;

  const expireText = document.createElement("p");
  expireText.style.cssText = styles.expireText;

  qrWrapper.appendChild(guide);
  qrWrapper.appendChild(qrImage);
  qrWrapper.appendChild(expireText);
  content.appendChild(qrWrapper);

  document.body.appendChild(modal);

  const updateRemainingTime = () => {
    const now = new Date();
    const seconds = Math.max(0, Math.floor((expireDate.getTime() - now.getTime()) / 1000));
    expireText.textContent = `유효시간 ${seconds}초`;
    return seconds;
  };

  // 타이머
  let timerId = setInterval(() => {
    const remaining = updateRemainingTime();

    if (remaining <= 0) {
      clearInterval(timerId);
      modal.style.cssText = styles.expiredOverlay;

      qrImage.src = ""; // 기존 QR 제거
      qrImage.style.display = "none";

      const expiredImage = document.createElement("img");
      expiredImage.src = expiredImageBase64; // 실제 이미지 경로로 대체
      expiredImage.alt = "만료된 결제";
      expiredImage.style.cssText = styles.expiredImage;

      qrWrapper.insertBefore(expiredImage, expireText);

      guide.textContent = "결제 유효시간이 만료되었습니다.";
      expireText.textContent = "다시 시도해주세요.";
    }
  }, 1000);

  updateRemainingTime();
}
