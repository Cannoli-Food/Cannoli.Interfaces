import { IPayioSubscriptionSeat } from '../interfaces/i-subscription-seat';

export class PayioSubscriptionSeatEntity implements IPayioSubscriptionSeat {
  // #region Properties (2)

  public appId: string = '';
  public max: number = 0;

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<PayioSubscriptionSeatEntity>) {}

  // #endregion Constructors (1)
}
