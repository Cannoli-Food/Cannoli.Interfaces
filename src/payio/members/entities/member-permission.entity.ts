import { IPayioMemberRolePermission } from '../interfaces/i-member-permissions';

export class PayioMemberRolePermissionEntity implements IPayioMemberRolePermission {
  // #region Properties (2)

  public id: string = '';
  public name: string = '';

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<PayioMemberRolePermissionEntity>) {
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
