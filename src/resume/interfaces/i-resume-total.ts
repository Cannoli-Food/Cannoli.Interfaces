import { EDesenfilaFrom } from '../../general';
import { EResumeType } from '../enums/type.enum';
import { IGeneralResumeTotal } from './i-resume-general';

export interface IResumeChild {
  type: EResumeType | EDesenfilaFrom | string | null;
  totals: IGeneralResumeTotal; // valor total adiquirido do resume
  id: string; // ano/mês/dia/hora em que ocorreu o resume.
}
