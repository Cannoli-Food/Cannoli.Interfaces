import { IPayioPermission } from '../interfaces/i-permission';

export class PayioPermissionEntity implements IPayioPermission {
  // #region Properties (6)

  public createdAt: Date = new Date();
  public description: string = '';
  public id: string = '';
  public isActive: boolean = true;
  public name: string = '';
  public updatedAt: Date = new Date();

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<PayioPermissionEntity>) {
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
