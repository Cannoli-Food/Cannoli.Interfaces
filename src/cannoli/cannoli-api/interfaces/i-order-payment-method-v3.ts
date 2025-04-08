import { EOrderPaymentMethod } from "../enum/order-payment-method.enum";

export interface IOrderPaymentCard {
  brand: string | null;
  link: string | null;
}

export interface IOrderPaymentCash {
  changeFor: Number;
}

export interface IOrderPaymentMethodV3 {
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
}

export interface IOrderPaymentPix {
  pixKey: string;
  urlQrImage: string;
  pixQrCode: string,
}

export interface IOrderPaymentWallet {
  name: string;
}
