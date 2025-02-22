import { EIntDocType } from '../../../general';
import { IPaymentProvider } from '../../../general/interfaces/i-payment-provider';
import { IPixKeys } from '../../../general/interfaces/i-pix-keys';
import { INatipayAddress } from './i-address';

export interface INatipayCompany {
  active: boolean;
  address: INatipayAddress;
  containerId: string;
  containerName: string;
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
  pixKeys: IPixKeys[];
  sandbox: boolean;
  shortName: string; //Nome comercial ou fantasia
  tags: string[];
  currency: string;
  country: string;
  updatedAt: Date;
  version: string;
}
