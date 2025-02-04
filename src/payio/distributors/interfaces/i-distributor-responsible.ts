import { EDocType } from '../../../general';

export interface IPayioDistributorResponsible {
  // #region Properties (5)

  doc: string;
  docType: EDocType;
  email: string;
  name: string;
  phoneNumber: string;
  documentFileUrl: string;
  internationalCode: string;

  // #endregion Properties (5)
}
