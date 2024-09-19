import { EDeviceAppMode } from '../enum/device-app-mode.enum';
import { EOrderDeliveredBy } from '../enum/order-delivered-by.enum';
import { IDeviceAppConfig } from './i-device-app-configs';

export interface IDeviceApp {
  // #region Properties (3)

  configs: IDeviceAppConfig;

  defaultDeliveredBy?: EOrderDeliveredBy;
  mode: EDeviceAppMode;

  // #endregion Properties (3)
}
