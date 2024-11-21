import { MemberRulesEnum } from '../../member/enums';

export interface IMemberAccess {
  // #region Properties (14)

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
  rule: MemberRulesEnum;
  tags: string[];
  updated: Date;
  userId: string;

  // #endregion Properties (14)
}
