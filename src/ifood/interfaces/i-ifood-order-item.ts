import { IIFoodOrderItemOption } from "./i-ifood-order-item-option";
import { IIFoodOrderItemScalePrice } from "./i-ifood-order-item-scale-price";

export interface IIFoodOrderItem {
	unitPrice: number;
	quantity: number;
	externalCode?: string;
	totalPrice: number;
	index: number;
	unit?: string;
	ean?: string;
	price: number;
	scalePrices?: IIFoodOrderItemScalePrice;
	observations?: string;
	imageUrl?: string;
	name: string;
	type?: string;
	options?: IIFoodOrderItemOption[];
	id: string;
	optionsPrice?: number;
  }