import { PayioEntitiesEnum, PayioResumeQueueStatusEnum } from '../enums';
import { PayioResumeQueueActionEnum } from '../enums/resume-queue-action.enum';
import { IPayioResumeQueue } from '../interfaces';
import { PayioResumeQueuePayloadEntity } from './resume-queue-payload.entity';

export class PayioResumeQueueEntity implements IPayioResumeQueue {
  // #region Properties (10)

  public action: PayioResumeQueueActionEnum = PayioResumeQueueActionEnum.create;
  public attempts: number = 0;
  public createdAt: Date = new Date();
  public entityId: string = '';
  public entityType: PayioEntitiesEnum = PayioEntitiesEnum.aplications;
  public error: string = '';
  public id: string = '';
  public lastAttemptAt: Date = new Date();
  public payload: PayioResumeQueuePayloadEntity = new PayioResumeQueuePayloadEntity();
  public status: PayioResumeQueueStatusEnum = PayioResumeQueueStatusEnum.pending;

  // #endregion Properties (10)
}
