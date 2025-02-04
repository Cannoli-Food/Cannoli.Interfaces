import { IPayioSchedule, IPayioScheduleDay, IPayioScheduleProduct } from '../interfaces';

export class PayioScheduleEntity implements IPayioSchedule {
  // #region Properties (7)

  public active: boolean = true;
  public createdAt: Date = new Date();
  public days: IPayioScheduleDay[] = [];
  public id: string = '';
  public name: string = '';
  public products: IPayioScheduleProduct[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (7)

  // #region Constructors (1)

  constructor(data?: Partial<PayioScheduleEntity>) {
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
