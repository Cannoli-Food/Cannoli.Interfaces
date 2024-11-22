import { IAddress } from '../../general';
import { EDocType } from '../../general/enums';

export interface IDeveloper {
  // #region Properties (13)

  active: boolean;
  address: IAddress | null;
  createdAt: Date;
  doc: string;
  docType: EDocType;
  email: string | null;
  id: string;
  slug: string;
  imageUrl: string | null;
  internationalCode: string;
  name: string;
  phoneNumber: string;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (13)
}
