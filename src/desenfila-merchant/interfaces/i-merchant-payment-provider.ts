import { IDesenfilaMerchantV2PaymentProviderAgent } from './i-merchant-payment-provider-agent';

export interface IDesenfilaMerchantV2PaymentProvider {
  // #region Properties (11)

  accountId: string;
  active: boolean;
  agent: IDesenfilaMerchantV2PaymentProviderAgent;
  customerId: string;
  liveApiToken: string;
  name: string;
  subscriptionId: string;
  testApiToken: string;
  userToken: string;
  verified: boolean;
  verifiedAt: Date;

  // #endregion Properties (11)
}
