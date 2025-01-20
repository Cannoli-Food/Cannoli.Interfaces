import { EPayioAdminRole } from '../enums/role.enum';

export interface IPayioAdmin {
  // #region Properties (11)

  accessCount: number | null;
  active: boolean;
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  lastAccessAt: Date | null;
  name: string;
  role: EPayioAdminRole;
  tags: string[];
  updatedAt: Date;
  userId: string;

  // #endregion Properties (11)
}
