import { ICoords } from '../../../general';
import { IResumeItemDetail } from '../interfaces';

export class ResumeItemDetailEntity implements IResumeItemDetail {
  // #region Properties (5)

  public cords: ICoords[] = [];
  public count: number = 0;
  public orderItemsCount: number = 0;
  public totalAmount: number = 0;
  public totalDiscount: number = 0;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeItemDetailEntity>) {
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
