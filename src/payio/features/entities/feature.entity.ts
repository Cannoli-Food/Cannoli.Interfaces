import { EPayuioFeatureType } from '../enum';
import { IPayioFeature } from '../interfaces/i-feature';

export class PayioFeatureEntity implements IPayioFeature {
  // #region Properties (12)

  public appId: string | null = null;
  public createdAt: Date = new Date();
  public description: string = '';
  public id: string = '';
  public index: number = 0;
  public quantity: number = 0;
  public recurrent: boolean = false;
  public totalPrice: number = 0;
  public type: EPayuioFeatureType = EPayuioFeatureType.DESCRIPTION;
  public unitPrice: number = 0;
  public updatedAt: Date = new Date();
  public voucherKey: string | null = null;

  // #endregion Properties (12)

  // #region Constructors (1)

  constructor(data?: Partial<PayioFeatureEntity>) {
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
