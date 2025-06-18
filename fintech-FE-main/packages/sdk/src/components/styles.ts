export const styles = {
  overlay: `
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `,
  modal: `
    background: #fff;
    border-radius: 16px;
    width: 360px;
    max-width: 90%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
  `,
  header: `
    display: flex;
    justify-content: flex-end;
  `,
  closeButton: `
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #333;
  `,
  content: `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  `,
  logoBox: `
    align-self: center;
  `,
  productInfoBox: `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  `,
  productName: `
    font-size: 16px;
    font-weight: 600;
    color: #111;
    margin: 0;
  `,
  priceText: `
    font-size: 14px;
    color: #666;
    margin: 0;
  `,
  qrWrapper: `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  `,
  guide: `
    font-size: 14px;
    color: #888;
    text-align: center;
    margin: 0;
  `,
  qrImage: `
    width: 200px;
    height: 200px;
  `,
  expireText: `
    font-size: 16px;
    font-weight: bold;
    color: #FF4D4F;
    margin: 0;
  `,
  expiredOverlay: `
    background-color: rgba(100, 100, 100, 0.8);
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `,
  expiredQRPlaceholder: `
    width: 200px;
    height: 200px;
    background-color: #555;
    border-radius: 8px;
  `,
  logoImage: `
  width: 80px;
  height: auto;
  object-fit: contain;
`,
  expiredImage: `
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`,
};
