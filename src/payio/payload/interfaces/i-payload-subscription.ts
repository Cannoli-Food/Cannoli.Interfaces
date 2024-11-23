import { ESubscriptionStatus } from '../../../subscription-base/enums/subscription-status.enum';

export interface IPayioJwtPayloadSubscription {
  // #region Properties (3)

  expiresAt: number;
  plan: string;
  status: ESubscriptionStatus;

  // #endregion Properties (3)
}
