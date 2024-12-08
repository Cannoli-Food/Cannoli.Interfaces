import { OrderEntity } from '../../../order';
import { PayioOrderIndoorEntity } from './indoor.entity';

export class PayioOrderEntity extends OrderEntity {
  // #region Constructors (1)
  public indoor: PayioOrderIndoorEntity | null = null;

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
