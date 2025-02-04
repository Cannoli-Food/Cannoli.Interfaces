import { IPayioDeviceChef } from '../interfaces/i-device-chef';

export class PayioDeviceChefEntity implements IPayioDeviceChef {
  // #region Properties (4)

  public chefConfigId: string | null = null;
  public chefConfigName: string | null = null;
  public scheduleId: string | null = null;
  public scheduleName: string | null = null;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<PayioDeviceChefEntity>) {
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
