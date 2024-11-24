import { EIntervalType, ESubsStatus, ICustomVariable, IPaymentMethod } from '../../../general';
import { IPayioSubscriptionItem } from './i-subscription-item';
import { IPayioSubscriptionLog } from './i-subscription-log';

export interface IPayioSubscription {
  // #region Properties (21)

  amount: number;
  cancellationReason: string;
  createdAt: Date;
  customVariables: ICustomVariable[];
  expiresAt: Date;
  id: string;
  maxSeats: number;
  activeDevices: string[];
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
  startsAt: Date;
  status: ESubsStatus;
  suspendedTimes: number;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (21)
}
