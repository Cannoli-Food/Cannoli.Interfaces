import { IPaymentMethod } from "./i-payment-method";

export interface IDeviceAppConfig {
    // #region Properties (1)

    paymentsOffline: IPaymentMethod[];
    checkoutOnline: boolean;
    checkoutOffline: boolean;
    checkoutPix: boolean;

    // #endregion Properties (1)
}