import { IBase } from '../../general';
import { EMemberRules, EMemberType } from '../enums';

export interface IMember extends IBase {
  // #region Properties (9)

  companyName: string;
  containerName: string;
  email: string;
  name: string;
  partnerId: string | null;
  internationalCode: string;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  phoneNumberVerifiedAt: Date | null;
  /**
   * @deprecated Use `imageUrl` instead
   */
  photoUrl: string | null;
  imageUrl: string | null;
  rule: EMemberRules;
  type: EMemberType | null;
  tags: string[];
  uid: string;

  // #endregion Properties (9)
}
