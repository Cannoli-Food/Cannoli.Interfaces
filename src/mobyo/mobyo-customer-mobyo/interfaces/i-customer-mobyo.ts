import { ICustomer } from '../../../customer';
import { IAddress } from '../../../general';

export interface ICustomerMobyo extends ICustomer {
  // #region Properties (9)

  active: boolean;
  addresses: IAddress[];
  companyId: string;
  containerId: string;
  engines: string[];
  isTest: boolean;
  ordersCountOnRestaurant: number;
  uid: string;
  version: string;

}
