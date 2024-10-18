import { EOrderStatus } from "../../../order/enums/order-status.enum";

export interface IOrderActionV3 {
  status: EOrderStatus;

  createdAt: Date;

  user?: any;
}
