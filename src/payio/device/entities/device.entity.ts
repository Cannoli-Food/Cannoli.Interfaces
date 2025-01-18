import { IPayioDevice } from '../interfaces/i-device';
import { PayioDeviceChefEntity } from './device-chef.entity';

export class PayioDeviceEntity implements IPayioDevice {
  // #region Properties (10)

  public active: boolean = false;
  public companyId: string = '';
  public containerId: string = '';
  public createdAt: Date = new Date();
  public deviceId: string = '';
  public id: string = '';
  public lastAccess: Date = new Date();
  public name: string = '';
  public tags: string[] = [];
  public updatedAt: Date = new Date();
  public chef: PayioDeviceChefEntity | null = null;

  // #endregion Properties (10)

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
