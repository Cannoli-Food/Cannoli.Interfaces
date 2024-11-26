import { EPaymentType } from '..';
import { IPaymentMethod } from '../interfaces';
import { PaymentCardEntity } from './payment-card.entity';
import { PaymentCashEntity } from './payment-cash.entity';
import { PaymentPixEntity } from './payment-pix.entity';
import { PaymentWalletEntity } from './payment-wallet.entity';

export class PaymentMethodEntity implements IPaymentMethod {
  // #region Properties (11)

  public card?: PaymentCardEntity | null = null;
  public cash?: PaymentCashEntity | null = null;
  public payAt?: Date = undefined;
  public code: string = '';
  public currency: 'BRL' = 'BRL';
  public id: string = '';
  public method: EPaymentType = EPaymentType.CASH;
  pix?: PaymentPixEntity | null = null;
  public prepaid: boolean = false;
  public type: 'ONLINE' | 'OFFLINE' = 'OFFLINE';
  public value: number = 0;
  public wallet?: PaymentWalletEntity | null = null;

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor(data?: Partial<PaymentMethodEntity>) {
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
