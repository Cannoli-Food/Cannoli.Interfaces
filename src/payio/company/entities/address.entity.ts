import { CoordsEntity } from '../../../general/entities/coords.entity';
import { IPayioAddress } from '../interfaces/i-address';

export class PayioAddressEntity implements IPayioAddress {
  // #region Properties (11)

  public city: string = '';
  public complement: string | null = '';
  public coords: CoordsEntity = new CoordsEntity();
  public country: string | null | undefined;
  public neighborhood: string = '';
  public postalCode: string = '';
  public state: string = '';
  public streetName: string = '';
  public streetNumber: string = '';

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor(data?: Partial<PayioAddressEntity>) {
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
