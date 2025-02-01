import { PayioEntitiesEnum, PayioResumeQueueStatusEnum } from '../enums';
import { PayioResumeQueueActionEnum } from '../enums/resume-queue-action.enum';
import { IPayioResumeQueue } from '../interfaces';

export class PayioResumeQueueEntity implements IPayioResumeQueue {
  // #region Properties (10)

  public action: PayioResumeQueueActionEnum = PayioResumeQueueActionEnum.create;
  public attempts: number = 0;
  public createdAt: Date = new Date();
  public data: string | null = null;
  public entityId: string = '';
  public entityType: PayioEntitiesEnum = PayioEntitiesEnum.aplications;
  public error: string = '';
  public id: string = '';
  public lastAttemptAt: Date = new Date();
  public status: PayioResumeQueueStatusEnum = PayioResumeQueueStatusEnum.pending;

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<PayioResumeQueueEntity>) {
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
