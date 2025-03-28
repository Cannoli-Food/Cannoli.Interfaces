import { IIFoodOrderItemScalePriceScale } from "./i-ifood-order-item-scale-price-scale";

export interface IIFoodOrderItemScalePrice {
	description?: string;
	defaultPrice: number;
	scales: IIFoodOrderItemScalePriceScale[];
}