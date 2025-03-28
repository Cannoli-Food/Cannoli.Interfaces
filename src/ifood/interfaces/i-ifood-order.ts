import { EIFoodOrderTiming } from '../enums/ifood-order-timing.enum';
import { EIFoodOrderType } from '../enums/ifood-order-type.enum';
import { IIFoodOrderAdditionalFee } from './i-ifood-order-additional-fee';
import { IIFoodOrderCustomer } from './i-ifood-order-customer';
import { IIFoodOrderDelivery } from './i-ifood-order-delivery';
import { IIFoodOrderDineIn } from './i-ifood-order-dine-in';
import { IIFoodOrderIndoor } from './i-ifood-order-indoor';
import { IIFoodOrderItem } from './i-ifood-order-item';
import { IIFoodOrderMerchant } from './i-ifood-order-merchant';
import { IIFoodOrderPayment } from './i-ifood-order-payment';
import { IIFoodOrderPicking } from './i-ifood-order-picking';
import { IIFoodOrderSchedule } from './i-ifood-order-schedule';
import { IIFoodOrderTakeout } from './i-ifood-order-takeout';
import { IIFoodOrderTotal } from './i-ifood-order-total';

export interface IIFoodOrder {
  orderType: EIFoodOrderType;
  payments: IIFoodOrderPayment;
  merchant: IIFoodOrderMerchant;
  salesChannel?: string;
  category?: string;
  picking: IIFoodOrderPicking;
  orderTiming: EIFoodOrderTiming;
  createdAt: string | Date;
  total: IIFoodOrderTotal;
  preparationStartDateTime: string | Date;
  id: string;
  displayId: string;
  items: IIFoodOrderItem[];
  customer: IIFoodOrderCustomer;
  extraInfo?: string;
  additionalFees?: IIFoodOrderAdditionalFee[];
  delivery?: IIFoodOrderDelivery;
  schedule?: IIFoodOrderSchedule;
  indoor?: IIFoodOrderIndoor;
  dineIn?: IIFoodOrderDineIn;
  takeout?: IIFoodOrderTakeout;
}
