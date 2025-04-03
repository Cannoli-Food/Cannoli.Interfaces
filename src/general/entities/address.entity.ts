import { IAddress, IDeliveryArea } from '../interfaces';
import { CoordsEntity } from './coords.entity';

export class AddressEntity implements IAddress {
  // #region Properties (15)

  public city: string = '';
  public complement: string | null = '';
  public coords: CoordsEntity = new CoordsEntity();
  public country: string = '';
  public deliveryArea: IDeliveryArea | null = null;
  public formattedAddress: string | null = '';
  public id: string | null = '';
  public isDefault: boolean = false;
  public name: string | null = '';
  public neighborhood: string = '';
  public postalCode: string = '';
  public reference: string | null = '';
  public state: string = '';
  public streetName: string = '';
  public streetNumber: string = '';
  public cannoliDeliveryFee: number | null = null;
  public cannoliDeliveryFeeOnline: number | null = null;

  // #endregion Properties (15)

  // #region Constructors (1)

  constructor(data?: Partial<AddressEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
