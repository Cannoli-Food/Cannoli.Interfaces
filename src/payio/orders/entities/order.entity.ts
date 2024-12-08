import { OrderEntity } from '../../../order';
import { IPayioOrder } from '../interfaces';
import { PayioOrderIndoorEntity } from './indoor.entity';

export class PayioOrderEntity extends OrderEntity implements IPayioOrder {
  // #region Properties (2)

  public deviceId: string | null = null;
  public indoor: PayioOrderIndoorEntity | null = null;

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<PayioOrderEntity>) {
    super();
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
