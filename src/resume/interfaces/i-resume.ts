import { IDesenfilaInfo, IInfo } from '../../general';
import { EResumeIntervalType } from '../enums/interval-type.enum';
import { IGeneralResumeTotal } from './i-resume-general';
import { IResumeChild } from './i-resume-total';

export interface IResume {
  id: string;
  interval: EResumeIntervalType;
  info: IInfo | IDesenfilaInfo | null;
  createdAt: Date;
  updatedAt: Date;
  totals: IGeneralResumeTotal;
  child: IResumeChild[];
  childByType: IResumeChild[];
}
