import { EDesenfilaFrom } from '../../general';
import { EResumeType } from '../enums';
import { IResumeChild } from '../interfaces';
import { GeneralResumeTotalEntity } from './general-resume-total.entity';

export class ResumeChildEntity implements IResumeChild {
  public type: EResumeType | EDesenfilaFrom | string | null = null;
  public totals: GeneralResumeTotalEntity = new GeneralResumeTotalEntity();
  public id: string = '';

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
