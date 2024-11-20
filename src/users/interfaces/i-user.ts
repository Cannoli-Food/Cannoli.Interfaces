import { MemberTypeEnum } from '../enums';
import { IUserSession } from './i-user-session';

export interface IUser {
  // #region Properties (12)

  active: boolean;
  createdAt: Date;
  email: string | null;
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  name: string;
  phoneNumber: string;
  session: IUserSession;
  tags: string[];
  type: MemberTypeEnum | null;
  updatedAt: Date;

  // #endregion Properties (12)
}
