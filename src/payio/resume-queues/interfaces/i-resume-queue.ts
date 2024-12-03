import { PayioEntitiesEnum, PayioResumeQueueStatusEnum } from '../enums';
import { PayioResumeQueueActionEnum } from '../enums/resume-queue-action.enum';
import { IPayioResumeQueuePayload } from './i-resume-queue-payload';

export interface IPayioResumeQueue {
  // #region Properties (10)

  action: PayioResumeQueueActionEnum;
  attempts: number;
  createdAt: Date;
  entityId: string;
  entityType: PayioEntitiesEnum;
  error: string;
  id: string;
  lastAttemptAt: Date;
  payload: IPayioResumeQueuePayload;
  status: PayioResumeQueueStatusEnum;

  // #endregion Properties (10)
}
