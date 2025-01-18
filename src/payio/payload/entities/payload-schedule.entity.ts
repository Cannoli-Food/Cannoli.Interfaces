import { IPayioJwtPayloadSchedule } from '../interfaces';

export class PayioJwtPayloadScheduleEntity implements IPayioJwtPayloadSchedule {
  // #region Properties (3)

  public id: string = '';
  public name: string | null = '';

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<PayioJwtPayloadScheduleEntity>) {
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
