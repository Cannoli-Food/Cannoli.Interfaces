import { ICustomer } from '../../../customer';
import { IAddress } from '../../../general';
import { IPrivacySetting } from './i-customer-mobyo copy';

export interface ICustomerMobyo extends ICustomer {
  active: boolean;
  addresses: IAddress[];
  companyId: string;
  containerId: string;
  engines: string[];
  isTest: boolean;
  ordersCountOnRestaurant: number;
  uid: string;
  version: string;
  birthday: Date | null;
  privacySettings: IPrivacySetting;
}
