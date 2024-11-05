import { EResumeIntervalType } from '../../resume';
import { ETransactionResumesTargetType } from '../enums/transaction-resumes-target-type.enum';
import { ITransactionInfoResume } from '../interfaces';
import { ITransactionResumeItemDetail } from '../interfaces/i-resume-item-detail';
import { ITransactionResume } from '../interfaces/i-transaction-resume';
import { TransactionInfoResumeEntity } from './transaction-info-resume.entity';

export class TransactionResumeEntity implements ITransactionResume {
  public info: ITransactionInfoResume = new TransactionInfoResumeEntity();
  public interval: EResumeIntervalType = EResumeIntervalType.YEAR;
  public id: string = '';
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  public totalTarget: { target: ETransactionResumesTargetType; item: ITransactionResumeItemDetail }[] = []
  public items: { id: string; target: ETransactionResumesTargetType; item: ITransactionResumeItemDetail }[] = []

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
