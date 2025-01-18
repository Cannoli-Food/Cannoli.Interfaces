import { IOrder } from '../../../order';
import { EPayuioAppSlug } from '../../app';
import { IPayioOrderIndoor } from './i-order-indoor';

export interface IPayioOrder extends IOrder {
  // #region Properties (10)
  indoor: IPayioOrderIndoor | null;
  deviceId: string | null;
  appId: string | null;
  appSlug: EPayuioAppSlug;

  // #endregion Properties (10)
}
