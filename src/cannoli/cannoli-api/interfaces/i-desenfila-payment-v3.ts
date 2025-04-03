import { IDesenfilaPaymentItemV3 } from './i-desenfila-payment-item-v3';
export interface IDesenfilaPaymentV3 {
  refId: string;
  pos: number | string;
  from: 'ANOTEAKI' | 'CANNOLI';
  discount: number;
  invite: number;
  consumation: number;
  callback?: string;
  diffConsumation: number;
  paidValue: number;
  addition: number;
  amount: number;
  netAmount: number;
  items: IDesenfilaPaymentItemV3[];
}