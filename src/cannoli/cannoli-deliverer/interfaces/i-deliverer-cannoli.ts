import { IOrder } from '../../../order';

export interface IDelivererCannoli {
  id: string;
  phoneNumber: string;
  internationalCode: string;
  email?: string;
  name: string;
  nickName: string;
  tags: string[];
  ordersCountDeliveredOnRestaurant: IOrder[];
  pictureUrl?: string;
}
