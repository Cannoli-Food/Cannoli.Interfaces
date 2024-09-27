import { ITransactionInfoResume } from '../interfaces/i-transaction-info-resume';

export class TransactionInfoResumeEntity implements ITransactionInfoResume {
  // #region Properties (3)

  public companyId: string = '';
  public companyName: string = '';
  public containerId: string = '';

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<TransactionInfoResumeEntity>) {
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
