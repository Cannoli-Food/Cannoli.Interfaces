
import { IPaymentMethod } from '../../payments/interface/i-payment-method';

export class IDeviceAppConfig {
    // #region Properties (1)

    public paymentsOffline: IPaymentMethod[];
    public checkoutOnline: boolean;
    public checkoutOffline: boolean;
    public checkoutPix: boolean;

    // #endregion Properties (1)
}