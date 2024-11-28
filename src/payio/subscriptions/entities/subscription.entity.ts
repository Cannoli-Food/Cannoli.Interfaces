import { CustomVariableEntity, EIntervalType, ESubsStatus, PaymentMethodEntity } from '../../../general';
import { PayioFeatureEntity } from '../../features';
import { IPayioSubscription } from '../interfaces/i-subscription';
import { PayioSubscriptionActiveDeviceEntity } from './subscription-active-device.entity';
import { PayioSubscriptionLogEntity } from './subscription-log.entity';
import { PayioSubscriptionSeatEntity } from './subscription-seat.entity';

export class PayioSubscriptionEntity implements IPayioSubscription {
  // #region Properties (25)

  public activeDevices: PayioSubscriptionActiveDeviceEntity[] = [];
  public amount: number = 0;
  public cancellationReason: string = '';
  public companyId: string = '';
  public createdAt: Date = new Date();
  public customVariables: CustomVariableEntity[] = [];
  public expiresAt: Date = new Date();
  public id: string = '';
  public interval: number = 0;
  public intervalType: EIntervalType = EIntervalType.MONTHS;
  public items: PayioFeatureEntity[] = [];
  public logs: PayioSubscriptionLogEntity[] = [];
  public notes: string = '';
  public payment: PaymentMethodEntity | null = null;
  public planId: string = '';
  public planName: string = '';
  public renewPaymentDate: Date = new Date();
  public renovatedAt: Date = new Date();
  public seats: PayioSubscriptionSeatEntity[] = [];
  public startsAt: Date = new Date();
  public status: ESubsStatus = ESubsStatus.PENDING;
  public suspendedTimes: number = 0;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (25)

  // #region Constructors (1)

  constructor(data?: Partial<PayioSubscriptionEntity>) {
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
