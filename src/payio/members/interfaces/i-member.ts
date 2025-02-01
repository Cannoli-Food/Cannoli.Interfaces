import { IPayioMemberRole } from './i-member-role';

export interface IPayioMember {
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
  roles: IPayioMemberRole[];
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;
  userId: string;

  // #endregion Properties (15)
}
