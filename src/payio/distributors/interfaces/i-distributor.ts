import { EDocType } from '../../../general/enums/doc-type.enum';
import { IAction } from '../../../mobyo/mobyo-api/interfaces/action.interface';
import { IPayioAddress } from '../../company';
import { EPayioDistributorStatus } from '../enums';
import { IPayioDistributorResponsible } from './i-distributor-responsible';

export interface IPayioDistributor {
  // #region Properties (20)

  actions: IAction[];
  address: IPayioAddress;
  createdAt: Date;
  doc: string;
  docType: EDocType;
  email: string;
  id: string;
  imageUrl: string | null;
  contratoSocialPdfUrl: string | null;
  internationalCode: string;
  logoUrl: string | null;
  logs: string[];
  name: string;
  phoneNumber: string;
  responsibles: IPayioDistributorResponsible[];
  sandbox: boolean;
  slug: string;
  status: EPayioDistributorStatus;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (20)
}
