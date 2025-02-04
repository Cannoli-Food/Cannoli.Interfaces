import { ESubsStatus } from '../../../general';

export interface IPayioJwtPayloadSubscription {
  // #region Properties (3)

  expiresAt: number;
  id: string;
  status: ESubsStatus;
  usedTrial: boolean;

  // #endregion Properties (3)
}
