
import { IPaymentMethod } from '../../payments/interface/i-payment-method';
import { DeviceCustomerNameEnum } from './device-customer-name.enum';
import { IDeviceCheckoutConfigTef } from './i-device-checkout-config-tef';
import { IDeviceCheckoutPaymentsOnline } from './i-device-checkout-payments-online';

export class IDeviceCheckoutConfig {
    // #region Properties (5)

    public customerName: DeviceCustomerNameEnum;
    public paymentsOffline: IPaymentMethod[];
    public paymentsOnline: IDeviceCheckoutPaymentsOnline;
    public showReceiptDoc: boolean;
    public tef: IDeviceCheckoutConfigTef;

    // #endregion Properties (5)
}