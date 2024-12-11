import { IPayioScheduleSlot } from '../interfaces';

export class PayioScheduleSlotEntity implements IPayioScheduleSlot {
  // #region Properties (2)

  public code: string = '';
  public slot: string = '';

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<PayioScheduleSlotEntity>) {
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
