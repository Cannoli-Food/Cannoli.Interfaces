import { EMemberRules } from '../../mobyo/mobyo-api/enum/member-rules.enum';

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
  rule: EMemberRules;
  updated: Date;

  // #endregion Properties (9)
}
