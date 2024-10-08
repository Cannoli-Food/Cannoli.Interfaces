import { AddressEntity, CoordsEntity } from '../../general';
import { OrderTotalEntity } from '../../order';
import { IVoucherCustomer } from '../interfaces';

export class VoucherCustomerEntity implements IVoucherCustomer {
  public customerId: string = '';
  public cords: CoordsEntity = new CoordsEntity();
  public address: AddressEntity = new AddressEntity();
  public phoneNumber: string = '';
  public meta: string = ''; // JSON meta
  public id: string = '';
  public itensCount: number = 0;
  public total: OrderTotalEntity = new OrderTotalEntity();
  public averageAmount: number = 0; // total.subTotal / itensCount
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  
  constructor(data?: Partial<VoucherCustomerEntity>) {
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
