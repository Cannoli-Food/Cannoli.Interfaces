import { IPayioSchedule } from '../interfaces';
import { PayioScheduleSlotEntity } from './schedule-slot.entity';

export class PayioScheduleEntity implements IPayioSchedule {
  // #region Properties (5)

  public active: boolean = true;
  public createdAt: Date = new Date();
  public id: string = 'SEG';
  public slots: PayioScheduleSlotEntity[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (5)

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
