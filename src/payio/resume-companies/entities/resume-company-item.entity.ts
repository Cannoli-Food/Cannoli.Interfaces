import { IPayioResumeCompanyItem } from '../interfaces';
import { PayioResumeCompanyItemDetailEntity } from './resume-company-item-detail.entity';

export class PayioResumeCompanyItemEntity implements IPayioResumeCompanyItem {
  // #region Properties (3)

  public created: PayioResumeCompanyItemDetailEntity = new PayioResumeCompanyItemDetailEntity();
  public deleted: PayioResumeCompanyItemDetailEntity = new PayioResumeCompanyItemDetailEntity();
  public sandbox: PayioResumeCompanyItemDetailEntity = new PayioResumeCompanyItemDetailEntity();

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<PayioResumeCompanyItemEntity>) {
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
