
import { DeviceCheckoutStatusEnum } from './device-checkout-status.enum';
import { IDeviceCheckoutConfig } from './i-device-checkout-configs';
import { IDeviceCheckoutPicture } from './i-device-checkout-picture';

export class IDeviceCheckout {
    // #region Properties (15)
    public configs: IDeviceCheckoutConfig;
    public pictures: IDeviceCheckoutPicture;
    public status: DeviceCheckoutStatusEnum;

    // #endregion Properties (15)
}
