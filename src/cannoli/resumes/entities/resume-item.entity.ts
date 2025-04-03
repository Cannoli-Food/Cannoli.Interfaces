import { IResumeItem } from '../interfaces';
import { ResumeItemDetailEntity } from './resume-item-detail.entity';

export class ResumeItemEntity implements IResumeItem {
  // #region Properties (2)

  public cancelled: ResumeItemDetailEntity = new ResumeItemDetailEntity();
  public confirmed: ResumeItemDetailEntity = new ResumeItemDetailEntity();

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeItemEntity>) {
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
