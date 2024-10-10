import { IResumeVoucherItem } from '../interfaces';
import { ResumeVoucherItemDetailEntity } from './resume-voucher-item-detail.entity';

export class ResumeVoucherItemEntity implements IResumeVoucherItem {
  public confirmed: ResumeVoucherItemDetailEntity = new ResumeVoucherItemDetailEntity();
  public cancelled: ResumeVoucherItemDetailEntity = new ResumeVoucherItemDetailEntity();

  constructor(data?: Partial<ResumeVoucherItemEntity>) {
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
