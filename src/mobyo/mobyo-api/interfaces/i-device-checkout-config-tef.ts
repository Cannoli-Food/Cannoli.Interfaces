
import { DeviceTefTypeEnum } from './device-tef-type.enum';
import { IDeviceCheckoutConfigTefApi } from './i-device-checkout-config-tef-api';

export class IDeviceCheckoutConfigTef {
    // #region Properties (1)
    public api: IDeviceCheckoutConfigTefApi;

    public type: DeviceTefTypeEnum;

    // #endregion Properties (1)
}