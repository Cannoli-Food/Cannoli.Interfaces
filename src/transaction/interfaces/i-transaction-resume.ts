import { EResumeIntervalType } from '../../resume';
import { ETransactionResumesTargetType } from '../enums/transaction-resumes-target-type.enum';
import { ITransactionResumeItemDetail } from './i-resume-item-detail';
import { ITransactionInfoResume } from './i-transaction-info-resume';

export interface ITransactionResume {
  info: ITransactionInfoResume;
  interval: EResumeIntervalType;
  id: string; // padrão AAAAMMDD
  createdAt: Date;
  updatedAt: Date;
  resumeVersion:string
  totalTarget: { target: ETransactionResumesTargetType; item: ITransactionResumeItemDetail }[];
  items: { id: string; target: ETransactionResumesTargetType; item: ITransactionResumeItemDetail }[]; // id no padrão MM - DD - HH
}
