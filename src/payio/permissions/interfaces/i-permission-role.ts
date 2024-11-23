import { ERole } from '../../../general';
import { IPayioPermission } from './i-permission';

export interface IPayioPermissionRole {
  // #region Properties (5)

  createdAt: Date;
  id: string;
  permissions: IPayioPermission[];
  role: ERole;
  updatedAt: Date;

  // #endregion Properties (5)
}
