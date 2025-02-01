import { PayioEntitiesEnum, PayioResumeQueueStatusEnum } from '../enums';
import { PayioResumeQueueActionEnum } from '../enums/resume-queue-action.enum';

export interface IPayioResumeQueue {
  // #region Properties (10)

  action: PayioResumeQueueActionEnum;
  attempts: number;
  createdAt: Date;
  data: string | null;
  entityId: string;
  entityType: PayioEntitiesEnum;
  error: string;
  id: string;
  lastAttemptAt: Date;
  status: PayioResumeQueueStatusEnum;

  // #endregion Properties (10)
}
