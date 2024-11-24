import { IPayioJwtPayloadDevice } from '../interfaces/i-payload-device';

export class PayioJwtPayloadDeviceEntity implements IPayioJwtPayloadDevice {
  // #region Properties (3)

  public id: string = '';
  public name: string | null = '';

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<PayioJwtPayloadDeviceEntity>) {
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
