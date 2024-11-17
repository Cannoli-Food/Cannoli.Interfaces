import { IBase } from '../../general';
import { MemberRulesEnum, MemberTypeEnum } from '../enums';

export interface IMember extends IBase {
  // #region Properties (9)

  companyName: string;
  containerName: string;
  email: string;
  name: string;
  partnerId: string | null;
  developerId: string | null;
  internationalCode: string;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  phoneNumberVerifiedAt: Date | null;
  /**
   * @deprecated Use `imageUrl` instead
   */
  photoUrl: string | null;
  imageUrl: string | null;
  rule: MemberRulesEnum;
  type: MemberTypeEnum | null;
  tags: string[];
  uid: string;

  // #endregion Properties (9)
}
