import { EDeviceCustomerName } from '../enum/device-customer-name.enum';
import { IDeviceCheckoutConfigTef } from './i-device-checkout-config-tef';
import { IDeviceCheckoutPaymentsOnline } from './i-device-checkout-payments-online';
import { IPaymentMethod } from './i-payment-method';

export interface IDeviceCheckoutConfig {
  // #region Properties (5)

  customerName: EDeviceCustomerName;
  paymentsOffline: IPaymentMethod[];
  paymentsOnline: IDeviceCheckoutPaymentsOnline;
  showReceiptDoc: boolean;
  tef: IDeviceCheckoutConfigTef;

  // #endregion Properties (5)
}
