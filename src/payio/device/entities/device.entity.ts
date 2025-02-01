import { IPayioDevice } from '../interfaces/i-device';
import { PayioDeviceChefEntity } from './device-chef.entity';

export class PayioDeviceEntity implements IPayioDevice {
  // #region Properties (12)

  public active: boolean = false;
  public chef: PayioDeviceChefEntity | null = null;
  public companyId: string = '';
  public containerId: string = '';
  public createdAt: Date = new Date();
  public deviceId: string = '';
  public id: string = '';
  public lastAccess: Date = new Date();
  public name: string = '';
  public sandbox: boolean = false;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (12)

  // #region Constructors (1)

  constructor(data?: Partial<PayioDeviceEntity>) {
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
