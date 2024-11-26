import { EIntervalType, ESubsStatus, ICustomVariable, IPaymentMethod } from '../../../general';
import { IPayioSubscriptionActiveDevice } from './i-subscription-active-device';
import { IPayioSubscriptionItem } from './i-subscription-item';
import { IPayioSubscriptionLog } from './i-subscription-log';
import { IPayioSubscriptionSeat } from './i-subscription-seat';

export interface IPayioSubscription {
  // #region Properties (24)

  activeDevices: IPayioSubscriptionActiveDevice[];
  amount: number;
  appIds: string[];
  cancellationReason: string;
  createdAt: Date;
  customVariables: ICustomVariable[];
  expiresAt: Date;
  id: string;
  interval: number;
  intervalType: EIntervalType;
  items: IPayioSubscriptionItem[];
  logs: IPayioSubscriptionLog[];
  notes: string;
  payment: IPaymentMethod;
  planId: string;
  planName: string;
  renewPaymentDate: Date;
  renovatedAt: Date;
  seats: IPayioSubscriptionSeat[];
  startsAt: Date;
  status: ESubsStatus;
  suspendedTimes: number;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (24)
}
