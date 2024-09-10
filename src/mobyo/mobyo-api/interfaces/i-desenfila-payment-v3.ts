import { IDesenfilaPaymentItemV3 } from './i-desenfila-payment-item-v3';
import { IOrderV3 } from './i-order-v3';

export interface IDesenfilaPaymentV3 {
  refId: string;
  pos: number | string;
  from: 'ANOTEAKI' | 'MOBYO';
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

export function factoryDesenfilaPaymentV3(
  order: IOrderV3,
  value: number,
  paymentId: string,
  companyName: string,
  doc: string,
) {
  const ret = {
    refId: order.id,
    pos: `MOBYO${doc}D${order.displayId}`,
    from: 'MOBYO',
    discount: 0,
    invite: 0,
    consumation: 0,
    callback: `https://us-central1-mobyo-00001.cloudfunctions.net/callbackDesenfilaPayment?orderId=${order.id}&companyId=${order.companyId}&containerId=${order.containerId}&paymentId=${paymentId}`,
    diffConsumation: 0,
    paidValue: 0,
    addition: 0,
    amount: order.total.orderAmount,
    netAmount: value,
    items: [
      {
        id: 1,
        quantity: 1,
        discount: 0,
        addition: 0,
        amount: value,
        netAmount: value,
        unitPrice: value,
        code: paymentId,
        name: `${companyName} #${order.displayId}`,
        unit: 'UN',
      } as IDesenfilaPaymentItemV3,
    ],
  } as IDesenfilaPaymentV3;
  return ret;
}
