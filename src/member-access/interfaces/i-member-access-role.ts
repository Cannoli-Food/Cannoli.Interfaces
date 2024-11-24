import { ERole } from '../../general/enums/role.enum';
import { IMemberAccessRolePermission } from './i-member-access-permissions';

export interface IMemberAccessRole {
  // #region Properties (5)
  permissions: IMemberAccessRolePermission[];
  role: ERole;

  // #endregion Properties (5)
}
