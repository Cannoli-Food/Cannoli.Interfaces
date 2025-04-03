import { EDeviceScreenMode } from '../enum/device-screen-mode.enum';
import { IDeviceScreenBoard } from './i-device-screen-board';

export interface IDeviceScreen {
  // #region Properties (4)

  board: IDeviceScreenBoard[];

  lateTime: number;
  mode: EDeviceScreenMode;

  soundVolume: number;

  // #endregion Properties (4)
}
