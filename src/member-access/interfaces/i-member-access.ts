import { MemberRulesEnum } from '../../member/enums';

export interface IMemberAccess {
  // #region Properties (9)

  accessCount: number | null;
  active: boolean;
  createdAt: Date;
  id: string;
  lastAccessAt: Date | null;
  memberId: string;
  imageUrl: string | null;
  name: string;
  rule: MemberRulesEnum;
  updated: Date;

  // #endregion Properties (9)
}
