import { EResumeIntervalType } from '../../resume';
import { ITransactionResume } from '../interfaces/i-transaction-resume';
import { TransactionInfoResumeEntity } from './transaction-info-resume.entity';

export class TransactionResumeEntity implements ITransactionResume {
  // #region Properties (6)

  public balance: number = 0;
  public createdAt: Date = new Date();
  public id: string = '';
  public info: TransactionInfoResumeEntity = new TransactionInfoResumeEntity();
  public interval: EResumeIntervalType = EResumeIntervalType.DAY;
  public updatedAt: Date = new Date();

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<TransactionResumeEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
