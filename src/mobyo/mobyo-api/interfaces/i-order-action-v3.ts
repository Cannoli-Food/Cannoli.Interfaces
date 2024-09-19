import { EOrderV3Status } from '../enum/order-v3-status.enum';

export interface IOrderActionV3 {
  status: EOrderV3Status;

  createdAt: Date;

  user?: any;
}
