import { IDesenfila } from '../../../app';
import { ICoords } from '../../../general';
import { EOrderDeliveredBy } from '../enum/order-delivered-by.enum';
import { ICompanyAddress } from './i-company-address';
import { ICompanyKeys } from './i-company-keys';
import { ICompanyMessage } from './i-company-message';
import { ICompanyPaymentProvider } from './i-company-payment-provider';
import { IDeliveryArea } from './i-delivery-area';
import { IDeliveryAreaFixed } from './i-delivery-area-fixed';
import { IPaymentMethod } from './i-payment-method';

export interface ICompany {
  // #region Properties (22)

  active?: boolean;

  address: ICompanyAddress;

  containerId: string;

  coords: ICoords;

  createdAt: number;

  deliveryArea: IDeliveryArea[];

  deliveryAreaFixed: IDeliveryAreaFixed;

  defaultDeliveredBy: EOrderDeliveredBy;

  desenfila: IDesenfila;

  doc: string;

  docType: 'CPF' | 'CNPJ';

  email: string;

  id: string;

  imageURL?: string;

  isTest: boolean;

  keys?: ICompanyKeys[];

  message?: ICompanyMessage[];

  name: string;
  paymentProvider: ICompanyPaymentProvider;
  payments: IPaymentMethod[];

  internationalCode?: string;

  phoneNumber: string;

  preparationTime: number;

  requestPreparationTime: boolean;

  updatedAt: number;

  version?: string;

  // #endregion Properties (22)

  // #region Constructors (1)
}
