import { EOrderPaymentMethod } from '../enum/order-payment-method.enum';

// #region Interfaces (5)

export interface IOrderPaymentCard {
  // #region Properties (2)

  brand: string | null;
  link: string | null;

  // #endregion Properties (2)
}

export interface IOrderPaymentCash {
  // #region Properties (1)

  changeFor: Number;

  // #endregion Properties (1)
}

export interface IOrderPaymentMethodV3 {
  // #region Properties (14)

  card: IOrderPaymentCard;
  cash: IOrderPaymentCash;
  code: string;
  createdAt: Date | null;
  currency: 'BRL';
  id: string;
  method: EOrderPaymentMethod;
  paymentId?: string;
  pix: IOrderPaymentPix | null;
  prepaid: boolean;
  transaction?: any;
  type: 'ONLINE' | 'OFFLINE';
  value: number;
  wallet: IOrderPaymentWallet;

  // #endregion Properties (14)
}

export interface IOrderPaymentPix {
  // #region Properties (2)

  pixKey: string;
  urlQrImage: string;

  // #endregion Properties (2)
}

export interface IOrderPaymentWallet {
  // #region Properties (1)

  name: string;

  // #endregion Properties (1)
}

// #endregion Interfaces (5)
