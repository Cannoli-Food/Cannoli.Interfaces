import { EDeviceCheckoutStatus } from '../enum/device-checkout-status.enum';
import { IDeviceCheckoutConfig } from './i-device-checkout-configs';
import { IDeviceCheckoutPicture } from './i-device-checkout-picture';

export interface IDeviceCheckout {
  // #region Properties (15)
  configs: IDeviceCheckoutConfig;
  pictures: IDeviceCheckoutPicture;
  status: EDeviceCheckoutStatus;

  // #endregion Properties (15)
}
