import { EResumeIntervalType } from '../../resume';
import { ITransactionInfoResume } from './i-transaction-info-resume';

export interface ITransactionResume {
  // #region Properties (7)

  balance: number;
  createdAt: Date;
  id: string;
  info: ITransactionInfoResume;
  interval: EResumeIntervalType;
  updatedAt: Date;
  // #endregion Properties (7)
}
