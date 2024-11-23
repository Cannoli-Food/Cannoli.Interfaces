import { IPayioPermissionRole } from '../../payio/permissions/interfaces/i-permission-role';

export interface IMemberAccess {
  // #region Properties (15)

  accessCount: number | null;
  active: boolean;
  companyId: string;
  companyName: string;
  containerId: string | null;
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  lastAccessAt: Date | null;
  name: string;
  roles: IPayioPermissionRole[];
  tags: string[];
  updated: Date;
  userId: string;

  // #endregion Properties (15)
}
