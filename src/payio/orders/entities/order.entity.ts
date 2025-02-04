import { OrderEntity } from '../../../order';
import { EPayuioAppSlug } from '../../app';
import { IPayioOrder } from '../interfaces';
import { PayioOrderIndoorEntity } from './indoor.entity';

export class PayioOrderEntity extends OrderEntity implements IPayioOrder {
  // #region Properties (4)

  public appId: string | null = null;
  public appSlug: EPayuioAppSlug = EPayuioAppSlug.none;
  public deviceId: string | null = null;
  public indoor: PayioOrderIndoorEntity | null = null;

  // #endregion Properties (4)

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
