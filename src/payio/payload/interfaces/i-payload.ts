import { IPayioPermissionRole } from '../../permissions/interfaces/i-permission-role';
import { IPayioJwtPayloadApp } from './i-payload-app';
import { IPayioJwtPayloadDevice } from './i-payload-device';
import { IPayioJwtPayloadInfo } from './i-payload-info';
import { IPayioJwtPayloadSubscription } from './i-payload-subscription';
import { IPayioJwtPayloadUser } from './i-payload-user';

export interface IPayioJwtPayload {
  // #region Properties (13)

  app: IPayioJwtPayloadApp | null;
  /**
   * (Audiência): Identifica os destinatários pretendidos do JWT (sua aplicação).
   */
  aud: string;
  device: IPayioJwtPayloadDevice | null;
  /**
   * (Expiração): Timestamp de quando o JWT expira
   */
  exp: number;
  /**
   * (Emitido em): Timestamp de quando o JWT foi emitido
   */
  iat: number;
  info: IPayioJwtPayloadInfo | null;
  /**
   * (Emissor): Identifica quem emitiu o JWT (o domínio da sua aplicação).
   */
  iss: string;
  jti: string | null;
  permissions: IPayioPermissionRole[];
  sub: string;
  subscription: IPayioJwtPayloadSubscription | null;
  type: string | null;
  user: IPayioJwtPayloadUser | null;

  // #endregion Properties (13)
}
