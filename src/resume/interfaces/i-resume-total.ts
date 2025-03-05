import { EFrom } from '../../general';
import { EResumeType } from '../enums/type.enum';
import { IResumeChildInfo } from './I-info-resume-child';
import { IGeneralResumeTotal } from './i-resume-general';

export interface IResumeChild {
  type: EResumeType | EFrom | string | null;
  info: IResumeChildInfo;
  totals: IGeneralResumeTotal; // valor total adiquirido do resume
  id: string; // ano/mês/dia/hora em que ocorreu o resume.
}
