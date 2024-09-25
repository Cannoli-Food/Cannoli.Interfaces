import { IDesenfilaContainerOrder } from '../interfaces';
import { DesenfilaContainerOrderItemEntity } from './i-container-order-item.entity';
import { DesenfilaContainerOrderPaymentEntity } from './i-container-order-payment';
import { DesenfilaContainerOrderPixEntity } from './i-container-order-pix.entity';

export class DesenfilaContainerOrderEntity implements IDesenfilaContainerOrder {
  public active: boolean = true;
  public addition: number = 0;
  public amount: number = 0;
  public callback: string = '';
  public consumation: number = 0;
  public containerId: string = '';
  public createdAt: Date = new Date();
  public createdBy: string = '';
  public debug: boolean = false;
  public dest: { customerId: string; doc: string; email: string; name: string; phone: string } = {
    customerId: '',
    doc: '',
    email: '',
    name: '',
    phone: '',
  };
  public pix?: DesenfilaContainerOrderPixEntity | undefined = undefined;
  public diffConsumation: number = 0;
  public discount: number = 0;
  public from: string = '';
  public hasReceipt: boolean = false;
  public id: string = '';
  public invite: number = 0;
  public items: DesenfilaContainerOrderItemEntity[] = [];
  public merchantId: string = '';
  public netAmount: number = 0;
  public paid: boolean = false;
  public paidBy: string = '';
  public paidValue: number = 0;
  public payment: DesenfilaContainerOrderPaymentEntity = new DesenfilaContainerOrderPaymentEntity();
  public payments: DesenfilaContainerOrderPaymentEntity[] = [];
  public pendingPayment: number = 0;
  public pos: string = '';
  public refId: string = '';
  public status: string = '';
  public updatedAt: Date = new Date();
  public updatedBy: string = '';
  public version: string = '';

  constructor(data?: Partial<DesenfilaContainerOrderEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
