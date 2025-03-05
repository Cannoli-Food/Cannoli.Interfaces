import { IResumeChildInfo } from '../interfaces/I-info-resume-child';

export class ResumeChildInfoEntity implements IResumeChildInfo {
  public id: string = '';
  public name: string = '';

  constructor(data?: Partial<ResumeChildInfoEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
