import { ICustomer } from '../../../customer';
import { IAddress } from '../../../general';
import { IPrivacySetting } from './i-customer-privacy';

export interface ICustomerCannoli extends ICustomer {
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
