export type CardForm = {
  cardNumber: string;
  expiry: string;
  birth: string;
  password2Digits: string;
  cvc: string;
  paymentPassword: string;
};

export const cardInfos: CardForm[] = [
  {
    cardNumber: '1234123412341234',
    expiry: '0526',
    birth: '990113',
    password2Digits: '12',
    cvc: '123',
    paymentPassword: '123456',
  },
  {
    cardNumber: '5678567856785678',
    expiry: '1225',
    birth: '990113',
    password2Digits: '12',
    cvc: '123',
    paymentPassword: '111111',
  },
];

export const card = {
  register: (card: CardForm) => {
    cardInfos.push(card);
  },

  get: (cardNumber: string) => {
    return cardInfos.find((c) => c.cardNumber == cardNumber);
  },
};
