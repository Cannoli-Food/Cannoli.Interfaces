import { EMemberRules, EMemberType } from '../enums';

export interface IMember {
  active: boolean;
  companyId: string;
  containerId: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  companyName: string;
  containerName: string;
  email: string;
  imageUrl: string | null;
  internationalCode: string;
  name: string;
  partnerId: string | null;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  phoneNumberVerifiedAt: Date | null;
  /**
   * @deprecated Use `imageUrl` instead
   */
  photoUrl: string | null;
  rule: EMemberRules;
  tags: string[];
  type: EMemberType | null;
  uid: string;
}
