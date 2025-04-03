import { IResumeItemDetail } from './i-resume-item-detail';

export interface IResumeItem {
  confirmed: IResumeItemDetail;
  cancelled: IResumeItemDetail;
}
