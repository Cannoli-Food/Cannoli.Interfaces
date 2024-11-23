import { ERole } from '../../../general';
import { IPayioPermissionRole } from '../interfaces/i-permission-role';
import { PayioPermissionEntity } from './permission.entity';

export class PayioPermissionRoleEntity implements IPayioPermissionRole {
  // #region Properties (5)

  public createdAt: Date = new Date();
  public id: string = '';
  public permissions: PayioPermissionEntity[] = [];
  public role: ERole = ERole.USER;
  public updatedAt: Date = new Date();

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<PayioPermissionRoleEntity>) {
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
