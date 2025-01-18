import { IPayioScheduleProduct } from '../interfaces/i-schedule-product';

export class PayioScheduleProductEntity implements IPayioScheduleProduct {
  // #region Properties (9)

  public code: string = '';
  public description: string = '';
  public exceededWeightMessageText: string | null = '';
  public exceededWeightPrice: number = 0;
  public id: string = '';
  public maxWeightLimitMessage: number = 0;
  public maxWeightLimitPrice: number = 0;
  public price: number = 0;
  public unit: string = 'KG';

  // #endregion Properties (9)

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
