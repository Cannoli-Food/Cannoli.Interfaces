import { IBase, IBaseCompany } from '../../general';

export interface IOperator {
  // #region Properties (9)

  active: boolean;
  id: string;
  companies: IBaseCompany[];
  name: string;
  doc: string | null;
  email: string | null;  
  internationalCode: string;
  phoneNumber: string | null;
  phoneNumberVerified: boolean;
  phoneNumberVerifiedAt: Date | null;
  imageUrl: string | null;
  tags: string[];
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  // #endregion Properties (9)
}
