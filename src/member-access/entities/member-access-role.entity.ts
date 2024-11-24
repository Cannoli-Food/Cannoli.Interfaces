import { ERole } from '../../general';
import { IMemberAccessRole } from '../interfaces/i-member-access-role';
import { MemberAccessRolePermissionEntity } from './member-access-permission.entity';

export class MemberAccessRoleEntity implements IMemberAccessRole {
  // #region Properties (2)

  public permissions: MemberAccessRolePermissionEntity[] = [];
  public role: ERole = ERole.USER;

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<MemberAccessRoleEntity>) {
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
