import { ESubsStatus } from '../../../general';
import { IPayioJwtPayloadSubscription } from '../interfaces/i-payload-subscription';

export class PayioJwtPayloadSubscriptionEntity implements IPayioJwtPayloadSubscription {
  // #region Properties (4)

  public expiresAt: number = 0;
  public id: string = '';
  public planId: string = '';
  public status: ESubsStatus = ESubsStatus.PENDING;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<PayioJwtPayloadSubscriptionEntity>) {
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
