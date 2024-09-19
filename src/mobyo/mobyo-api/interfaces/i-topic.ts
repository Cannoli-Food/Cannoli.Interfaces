import { IEntity } from './i-entity';
import { ETopics } from '../enum/topics.enum';

export interface ITopic extends IEntity {
  // #region Properties (6)

  callbackUrl: string | null;
  deviceId: string;
  deviceName: string;
  expiresAt: number;
  tokenFcm: string | null;
  type: ETopics;

  // #endregion Properties (6)
}