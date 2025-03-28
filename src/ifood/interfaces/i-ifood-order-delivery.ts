import { EIFoodOrderDeliveryDelilveredBy } from "../enums/ifood-order-delivery-delivered-by.enum";
import { EIFoodOrderDeliveryMode } from "../enums/ifood-order-delivery-mode.enum";
import { IIFoodOrder } from "./i-ifood-order";
import { IIFoodOrderDeliveryAddress } from "./i-ifood-order-delivery-address";

export interface IIFoodOrderDelivery {
	mode: EIFoodOrderDeliveryMode;
	pickupCode: string;
	description: string;
	deliveredBy: EIFoodOrderDeliveryDelilveredBy;
	deliveryAddress: IIFoodOrderDeliveryAddress;
	deliveryDateTime: string | Date;
}