import { EIntDocType } from '../../../general';
import { IPaymentProvider } from '../../../general/interfaces/i-payment-provider';
import { IPayioAddress } from './i-address';

export interface IPayioCompany {
  active: boolean;
  address: IPayioAddress;
  containerId: string;
  createdAt: Date;
  doc: string;
  docType: EIntDocType;
  email: string;
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  logoUrl: string | null;
  name: string; //Nome registrado legalmente
  paymentProvider: IPaymentProvider | null;
  phoneNumber: string;
  sandbox: boolean;
  shortName: string; //Nome comercial ou fantasia
  tags: string[];
  currency: string;
  country: string;
  updatedAt: Date;
  version: string;
}
