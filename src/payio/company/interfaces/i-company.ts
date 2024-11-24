import { EDocType } from '../../../general/enums/doc-type.enum';
import { IPaymentProvider } from '../../../general/interfaces/i-payment-provider';
import { IPayioAddress } from './i-address';

export interface IPayioCompany {
  // #region Properties (19)

  active: boolean;
  address: IPayioAddress;
  containerId: string;
  createdAt: Date;
  doc: string;
  docType: EDocType;
  email: string;
  fullName: string;
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  logoUrl: string | null;
  name: string;
  paymentProvider: IPaymentProvider | null;
  phoneNumber: string;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;
  version: string;

  // #endregion Properties (19)
}
