import { IPayioJwtPayload } from '../interfaces/i-payload';
import { IPayioJwtPayloadApp } from '../interfaces/i-payload-app';
import { PayioJwtPayloadDeviceEntity } from './payload-device.entity';
import { PayioJwtPayloadSubscriptionEntity } from './payload-subscription.entity';
import { PayioJwtPayloadUserEntity } from './payload-user.entity';

export class PayioJwtPayloadEntity implements IPayioJwtPayload {
  // #region Properties (11)

  public app: IPayioJwtPayloadApp | null = null;
  public aud: string = '';
  public device: PayioJwtPayloadDeviceEntity | null = null;
  public exp: number = 0;
  public iat: number = 0;
  public iss: string = '';
  public permissions: string[] = [];
  public sub: string = '';
  public subscription: PayioJwtPayloadSubscriptionEntity | null = null;
  public type: string | null = null;
  public user: PayioJwtPayloadUserEntity | null = null;

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor(data?: Partial<PayioJwtPayloadEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
