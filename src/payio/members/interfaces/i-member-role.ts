import { ERole } from '../../../general';
import { IPayioMemberRolePermission } from './i-member-permissions';

export interface IPayioMemberRole {
  // #region Properties (5)
  permissions: IPayioMemberRolePermission[];
  role: ERole;

  // #endregion Properties (5)
}
