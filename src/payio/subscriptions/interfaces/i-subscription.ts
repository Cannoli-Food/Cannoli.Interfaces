import { EIntervalType, ESubsStatus, ICustomVariable, IPaymentMethod } from '../../../general';
import { IPayioFeature } from '../../features';
import { IPayioSubscriptionActiveDevice } from './i-subscription-active-device';
import { IPayioSubscriptionLog } from './i-subscription-log';

export interface IPayioSubscription {
  // #region Properties (25)

  activeDevices: IPayioSubscriptionActiveDevice[];
  amount: number;
  cancellationReason: string;
  companyId: string;
  createdAt: Date;
  customVariables: ICustomVariable[];
  expiresAt: Date;
  id: string;
  interval: number;
  intervalType: EIntervalType;
  items: IPayioFeature[];
  logs: IPayioSubscriptionLog[];
  notes: string;
  payment: IPaymentMethod;
  planId: string;
  planName: string;
  renewPaymentDate: Date;
  renovatedAt: Date;
  startsAt: Date;
  status: ESubsStatus;
  suspendedTimes: number;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (25)
}
