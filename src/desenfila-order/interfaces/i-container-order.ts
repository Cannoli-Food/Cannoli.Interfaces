import { EDesenfilaFrom } from '../../general';
import { IDesenfilaContainerOrderItem } from './i-container-order-item';
import { IDesenfilaContainerOrderPayment } from './i-container-order-payment';
import { IDesenfilaContainerOrderPix } from './i-container-order-pix';

export interface IDesenfilaContainerOrder {
  active: boolean;
  addition: number;
  amount: number;
  callback: string;
  consumation: number;
  containerId: string;
  createdAt: Date;
  createdBy: string;
  debug: boolean;
  dest: {
    customerId: string;
    doc: string;
    email: string;
    name: string;
    phone: string;
  };
  pix?: IDesenfilaContainerOrderPix;
  diffConsumation: number;
  discount: number;
  from: EDesenfilaFrom | string;
  hasReceipt: boolean;
  id: string;
  invite: number;
  items: IDesenfilaContainerOrderItem[];
  merchantId: string;
  netAmount: number;
  paid: boolean;
  paidBy: string;
  paidValue: number;
  /**
   * @deprecated Use array<payments> ao invés de payment
   */
  payment: IDesenfilaContainerOrderPayment;
  payments: IDesenfilaContainerOrderPayment[];
  pendingPayment: number;
  pos: string;
  refId: string;
  status: string;
  updatedAt: Date;
  updatedBy: string;
  version: string;
}
