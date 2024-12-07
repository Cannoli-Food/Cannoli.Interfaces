import { ICoords } from '../../../general';
import { IPayioResumeCompanyItemDetail } from '../interfaces';

export class PayioResumeCompanyItemDetailEntity implements IPayioResumeCompanyItemDetail {
  // #region Properties (2)

  public cords: ICoords[] = [];
  public count: number = 0;

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<PayioResumeCompanyItemDetailEntity>) {
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
