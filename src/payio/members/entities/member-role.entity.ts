import { ERole } from '../../../general';
import { IPayioMemberRole } from '../interfaces/i-member-role';
import { PayioMemberRolePermissionEntity } from './member-permission.entity';

export class PayioMemberRoleEntity implements IPayioMemberRole {
  // #region Properties (2)

  public permissions: PayioMemberRolePermissionEntity[] = [];
  public role: ERole = ERole.USER;

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<PayioMemberRoleEntity>) {
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
