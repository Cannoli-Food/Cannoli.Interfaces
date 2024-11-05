import { EDeviceAppMode } from '../enum/device-app-mode.enum';
import { EOrderDeliveredBy } from '../enum/order-delivered-by.enum';
import { IDeviceAppConfig } from './i-device-app-configs';
import { IDeviceAppImages } from './i-device-app-images';

export interface IDeviceApp {
  // #region Properties (3)

  configs: IDeviceAppConfig;
  defaultDeliveredBy?: EOrderDeliveredBy;
  mode: EDeviceAppMode;
  pictures: IDeviceAppImages;

  // #endregion Properties (3)
}
