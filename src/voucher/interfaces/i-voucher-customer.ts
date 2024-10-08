import { IAddress, ICoords } from '../../general';
import { IOrderTotal } from '../../order';

export interface IVoucherCustomer {
  customerId: string;
  cords: ICoords;
  address: IAddress;
  phoneNumber: string;
  meta: string; // JSON meta
  id: string;
  itensCount: number;
  total: IOrderTotal;
  averageAmount: number; // total.subTotal / itensCount
  createdAt: Date;
  updatedAt: Date;
}
