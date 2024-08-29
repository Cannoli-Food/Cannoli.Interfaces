import {  IDesenfilaMerchantV2PaymentProvider, IDesenfilaMerchantV2PaymentProviderAgent } from "../interfaces";

export class DesenfilaMerchantV2PaymentProviderEntity implements IDesenfilaMerchantV2PaymentProvider {
public  accountId: string = '';
public  active: boolean = true;
public  agent: IDesenfilaMerchantV2PaymentProviderAgent = { accountId: '' };
public  customerId: string = '';
public  liveApiToken: string = '';
public  name: string = '';
public  subscriptionId: string = '';
public  testApiToken: string = '';
public  userToken: string = '';
public  verified: boolean = false;
public  verifiedAt: Date  = new Date();

  constructor(data?: Partial<DesenfilaMerchantV2PaymentProviderEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
