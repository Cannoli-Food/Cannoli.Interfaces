import { EIntervalType } from '../../../general';
import { PayioFeatureEntity } from '../../features';
import { IPayioPlan } from '../interfaces';

export class PayioPlanEntity implements IPayioPlan {
  // #region Properties (12)

  public createdAt: Date = new Date();
  public features: PayioFeatureEntity[] = [];
  public id: string = '';
  public identifier: string = 'payio-selfcheckout-3';
  public index: number = 0;
  public interval: number = 12;
  public intervalType: EIntervalType = EIntervalType.MONTHS;
  public name: string = '';
  public price: number = 0;
  public tags: string[] = [];
  public trialDays: number = 0;
  public updatedAt: Date = new Date();

  // #endregion Properties (12)

  // #region Constructors (1)

  constructor(data?: Partial<PayioPlanEntity>) {
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
