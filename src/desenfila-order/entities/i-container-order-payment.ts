import { IDesenfilaContainerOrderPayment } from '../interfaces';

export class DesenfilaContainerOrderPaymentEntity implements IDesenfilaContainerOrderPayment {
  public amount: number = 0;
  public code: string = '';
  public couponAmount: number = 0;
  public createdAt: Date = new Date();
  public customerId: string = '';
  public dateAproved: Date = new Date();
  public description: string = '';
  public id: string = '';
  public marketPlaceAmount: number = 0;
  public merchant: string = '';
  public merchantName: string = '';
  public name: string = '';
  public transaction: string = '';
  public transactions: string[] = [];

  constructor(data?: Partial<DesenfilaContainerOrderPaymentEntity>) {
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
