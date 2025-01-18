import { IPayioScheduleSlot } from '../interfaces';
import { IPayioScheduleDay } from '../interfaces/i-schedule-day';

export class PayioScheduleDayEntity implements IPayioScheduleDay {
  // #region Properties (2)

  public day: string = '';
  public slots: IPayioScheduleSlot[] = [];

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<PayioScheduleDayEntity>) {
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
