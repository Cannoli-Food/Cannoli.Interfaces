import { EFrom } from '../../general';
import { EResumeType } from '../enums';
import { IResumeChild } from '../interfaces';
import { IResumeChildInfo } from '../interfaces/I-info-resume-child';
import { ResumeChildInfoEntity } from './general-resume-child-info.entity';
import { GeneralResumeTotalEntity } from './general-resume-total.entity';

export class ResumeChildEntity implements IResumeChild {
  public type: EResumeType | EFrom | string | null = null;
  public totals: GeneralResumeTotalEntity = new GeneralResumeTotalEntity();
  public id: string = '';
  public info: IResumeChildInfo = new ResumeChildInfoEntity();

  constructor(data?: Partial<ResumeChildEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
