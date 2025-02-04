import { EPayioAdminRole } from '../enums/role.enum';

export interface IPayioAdmin {
  // #region Properties (13)

  accessCount: number | null;
  active: boolean;
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  lastAccessAt: Date | null;
  name: string;
  phoneNumber: string;
  role: EPayioAdminRole;
  tags: string[];
  updatedAt: Date;
  userId: string;

  // #endregion Properties (13)
}
