import { IAddress } from '../../general';
import { EDocType } from '../../general/enums';

export interface IIntegrator {
  // #region Properties (13)

  active: boolean;
  address: IAddress;
  doc: string;
  docType: EDocType;
  email: string;
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  name: string;
  phoneNumber: string;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (13)
}
