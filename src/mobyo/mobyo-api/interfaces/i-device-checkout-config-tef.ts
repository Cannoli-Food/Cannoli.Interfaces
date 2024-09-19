import { EDeviceTefType } from '../enum/device-tef-type.enum';
import { IDeviceCheckoutConfigTefApi } from './i-device-checkout-config-tef-api';

export interface IDeviceCheckoutConfigTef {
  // #region Properties (1)
  api: IDeviceCheckoutConfigTefApi;

  type: EDeviceTefType;

  // #endregion Properties (1)
}
