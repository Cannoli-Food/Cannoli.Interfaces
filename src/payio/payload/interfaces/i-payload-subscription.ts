import { ESubsStatus } from '../../../general';

export interface IPayioJwtPayloadSubscription {
  // #region Properties (3)

  expiresAt: number;
  plan: string;
  status: ESubsStatus;

  // #endregion Properties (3)
}
