import { EDocType } from '../../../general';
import { IPaymentProvider } from '../../../general/interfaces/i-payment-provider';
import { IPixKey } from '../../../general/interfaces/i-pix-key';
import { IDesenfila } from '../../desenfila/interfaces';
import { INatipayAddress } from './i-address';

export interface INatipayCompany {
  active: boolean;
  address: INatipayAddress;
  containerId: string;
  containerName: string;
  country: string;
  createdAt: Date;
  currency: string;
  doc: string;
  docType: EDocType;
  email: string;
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  logoUrl: string | null;
  name: string;
  natipay: IDesenfila | null;

  //Nome registrado legalmente
  paymentProvider: IPaymentProvider | null;
  phoneNumber: string;
  pixKeys: IPixKey[];
  sandbox: boolean;
  shortName: string;

  //Nome comercial ou fantasia
  tags: string[];
  updatedAt: Date;
  version: string;
}
