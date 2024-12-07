import { IPayioResumeCompany, IPayioResumeCompanyItem } from '../interfaces';
import { PayioResumeCompanyItemEntity } from './resume-company-item.entity';

export class PayioResumeCompanyEntity implements IPayioResumeCompany {
  // #region Properties (5)

  public createdAt: Date = new Date();
  public id: string = '';
  public item: IPayioResumeCompanyItem = new PayioResumeCompanyItemEntity();
  public items: {
    id: string;
    item: PayioResumeCompanyItemEntity;
  }[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<PayioResumeCompanyEntity>) {
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
