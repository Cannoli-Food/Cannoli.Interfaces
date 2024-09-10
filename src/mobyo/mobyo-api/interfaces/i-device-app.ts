
import { DeviceAppModeEnum } from './device-app-mode.enum';
import { IDeviceAppConfig } from './i-device-app-configs';
import { OrderDeliveredByEnum } from '../../order-v3/interfaces-v3/order-delivered-by.enum';

export class IDeviceApp {
    // #region Properties (3)

    public configs: IDeviceAppConfig;
    
    public defaultDeliveredBy?: OrderDeliveredByEnum;
    public mode: DeviceAppModeEnum;

    // #endregion Properties (3)
}
