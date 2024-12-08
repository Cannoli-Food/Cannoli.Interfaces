import { IOrder } from '../../../order';
import { IPayioOrderIndoor } from './i-order-indoor';

export interface IPayioOrder extends IOrder {
  // #region Properties (10)
  indoor: IPayioOrderIndoor | null;
  deviceId: string | null;

  // #endregion Properties (10)
}
