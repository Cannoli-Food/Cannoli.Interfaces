import { EDeviceMode } from '../enum/device-mode.enum';
import { IDeviceAdjustValue } from './device-adjust-value.dto';
import { IDeviceApp } from './i-device-app';
import { IDeviceCheckout } from './i-device-checkout';
import { IDeviceScreen } from './i-device-screen';
import { IMenuScheduleV2 } from './i-menu-schedule-v2';

export interface IDevice {
  // #region Properties (15)

  active?: boolean;
  adjustValue: IDeviceAdjustValue;
  app?: IDeviceApp;
  checkout?: IDeviceCheckout;
  pixelFacebookToken: string;

  companyId: string;

  containerId: string;

  createdAt: Date;

  createdBy: string;

  deviceId: string;

  id: string;

  key: string;

  lastAccess: Date;

  mode: EDeviceMode;
  name: string;
  screen?: IDeviceScreen;

  updatedAt: Date;
  schedule: IMenuScheduleV2 | null;

  // #endregion Properties (15)
}
