import { EDocType } from '../../general';
import { IFee } from '../../transaction';
import { IDesenfilaMerchant, IDesenfilaMerchantMercadoPago } from '../interfaces';
import { DesenfilaMerchantAddressEntity } from './merchant-address.entity';
import { DesenfilaMerchantV2PaymentProviderEntity } from './merchant-payment-provider.entity';

export class DesenfilaMerchantEntity implements IDesenfilaMerchant {
  public active: boolean = false;
  public address: DesenfilaMerchantAddressEntity = new DesenfilaMerchantAddressEntity();
  public containerId: string = '';
  public containerName?: string | undefined = undefined;
  public countryCode: string = '';
  public createdAt: number | Date = new Date();
  public development: boolean = false;
  public doc: string = '';
  public docType: EDocType = EDocType.CNPJ;
  public email: string = '';
  public id: string = '';
  public imageURL: string = '';
  public isTest: boolean = false;
  public mercadoPago?: IDesenfilaMerchantMercadoPago | undefined = undefined;
  public name: string = '';
  public paymentProvider: DesenfilaMerchantV2PaymentProviderEntity = new DesenfilaMerchantV2PaymentProviderEntity();
  public phoneNumber: string = '';
  public updatedAt: number | Date = new Date();
  public version: string = '';
  public natiRefId?: string | undefined = undefined;
  public fees: IFee[] = [];

  constructor(data?: Partial<DesenfilaMerchantEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
