import { IDesenfilaMerchantAddress } from "../interfaces";

export class DesenfilaMerchantAddressEntity implements IDesenfilaMerchantAddress {
  public city: string = '';
  public complement?: string | undefined = '';
  public district: string = '';
  public state: string = '';
  public streetName: string = '';
  public streetNumber: string = '';
  public zipCode: string = '';

  constructor(data?: Partial<DesenfilaMerchantAddressEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
