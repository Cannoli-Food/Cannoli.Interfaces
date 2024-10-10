import { ICoords } from '../../../../general';
import { IResumeVoucherItemDetail } from '../interfaces';

export class ResumeVoucherItemDetailEntity implements IResumeVoucherItemDetail {
  cords: ICoords[] = [];
  count: number = 0;
  orderItemsCount: number = 0;
  totalAmount: number = 0;
  totalDiscount: number = 0;

  constructor(data?: Partial<ResumeVoucherItemDetailEntity>) {
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
