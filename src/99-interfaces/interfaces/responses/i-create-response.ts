import { INineNineDetailOrCancelOrderData } from '../dtos/i-cancel-or-detail-order.dto';

export interface INineNineCreateResponse {
  errno: number;
  errmsg: string;
  data: INineNineDetailOrCancelOrderData;
}
