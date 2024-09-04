import { IDesenfilaInfo, IMobyoInfo, INatiInfo } from '../../general';
import { EResumeIntervalType } from '../enums';
import { IResume, IResumeChild } from '../interfaces';
import { GeneralResumeTotalEntity } from './general-resume-total.entity';

export class ResumeEntity implements IResume {
  public id: string = '';
  public interval: EResumeIntervalType = EResumeIntervalType.YEAR;
  public info: IDesenfilaInfo | INatiInfo | IMobyoInfo | null = null;
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  public totals: GeneralResumeTotalEntity = new GeneralResumeTotalEntity();
  public child: IResumeChild[] = [];
  public childByType: IResumeChild[] = [];

  constructor(data?: Partial<ResumeEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
