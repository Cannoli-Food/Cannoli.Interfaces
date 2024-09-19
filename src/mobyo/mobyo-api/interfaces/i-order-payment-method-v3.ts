import { EOrderPaymentMethod } from "../enum/order-payment-method.enum";

export interface IOrderPaymentPix {
  pixKey: string;

  urlQrImage: string;
}
export interface IOrderPaymentWallet {
  name: string;
}
export interface IOrderPaymentCard {
  brand: string;
}
export interface IOrderPaymentCash {
  changeFor: Number;
}
export interface IOrderPaymentMethodV3 {
  card: IOrderPaymentCard;
  cash: IOrderPaymentCash;

  code: string;

  currency: 'BRL';

  id: string;
  method: EOrderPaymentMethod;
  pix?: IOrderPaymentPix;

  prepaid: boolean;

  transaction?: any;

  type: 'ONLINE' | 'OFFLINE';

  value: number;
  wallet: IOrderPaymentWallet;
}
