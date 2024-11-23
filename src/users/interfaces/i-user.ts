import { MemberTypeEnum } from '../../member/enums';

export interface IUser {
  // #region Properties (13)

  active: boolean;
  createdAt: Date;
  email: string | null;
  engaged: boolean;
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  name: string;
  phoneNumber: string;
  tags: string[];
  type: MemberTypeEnum | null;
  updatedAt: Date;

  // #endregion Properties (13)
}
