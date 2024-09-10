
import { DeviceScreenModeEnum } from './device-screen-mode.enum';
import { IDeviceScreenBoard } from './i-device-screen-board';

export class IDeviceScreen {
    // #region Properties (4)

    public board: IDeviceScreenBoard[];
    
    public lateTime: number;
    public mode: DeviceScreenModeEnum;
    
    public soundVolume: number;

    // #endregion Properties (4)
}
