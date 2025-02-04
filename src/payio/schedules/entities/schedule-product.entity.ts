import { IPayioScheduleProduct } from '../interfaces/i-schedule-product';

export class PayioScheduleProductEntity implements IPayioScheduleProduct {
  // #region Properties (11)

  public code: string = '';
  public description: string = '';
  public exceededWeightMessageText: string | null = '';
  public exceededWeightPrice: number = 0;
  public helpYourSelf: boolean = false;
  public id: string = '';
  public price: number = 0;
  public unit: string = 'KG';
  public weightLimitMessage: number = 0;
  public weightLimitPrice: number = 0;

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor(data?: Partial<PayioScheduleProductEntity>) {
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
