import { IFee } from '../../transaction';
import { IDesenfilaMerchantAddress } from './i-merchant-address';
import { IDesenfilaMerchantMercadoPago } from './i-merchant-mercado-pago';
import { IDesenfilaMerchantV2PaymentProvider } from './i-merchant-payment-provider';

export interface IDesenfilaMerchant {
  // #region Properties (19)

  active: boolean;
  address: IDesenfilaMerchantAddress;
  containerId: string;
  containerName?: string;
  countryCode: string;
  createdAt: Date | number;
  development: boolean;
  doc: string;
  docType: 'CNPJ' | 'CPF';
  email: string;
  id: string;
  imageURL: string;
  isTest: boolean;
  mercadoPago?: IDesenfilaMerchantMercadoPago;
  name: string;
  paymentProvider: IDesenfilaMerchantV2PaymentProvider;
  phoneNumber: string;
  updatedAt: Date | number;
  version: string;
  natiRefId?: string;
  fees: IFee[]; // são os tipos determinadas para cada derviço
}
