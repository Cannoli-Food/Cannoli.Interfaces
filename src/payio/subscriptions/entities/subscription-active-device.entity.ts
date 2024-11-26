import { IPayioSubscriptionActiveDevice } from '../interfaces/i-subscription-active-device';

export class PayioSubscriptionActiveDeviceEntity implements IPayioSubscriptionActiveDevice {
  // #region Properties (3)

  public appId: string = '';
  public deviceId: string = '';

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<PayioSubscriptionActiveDeviceEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
