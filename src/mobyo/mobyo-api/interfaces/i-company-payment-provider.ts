import { ICompanyPaymentProviderAgent } from './i-company-payment-provider-agent';
import { ICompanyPaymentProviderPaymentMethod } from './i-company-payment-providers-payments-method';

export interface ICompanyPaymentProvider {
  // #region Properties (11)

  accountId: string;

  active: boolean;
  agent: ICompanyPaymentProviderAgent;

  customerId: string;

  liveApiToken: string;

  name: string;

  paymentsMethods: ICompanyPaymentProviderPaymentMethod[];

  subscriptionId: string;

  testApiToken: string;

  userToken: string;

  verified: boolean;

  verifiedAt: number;

  // #endregion Properties (11)

  // #region Constructors (1)
}
