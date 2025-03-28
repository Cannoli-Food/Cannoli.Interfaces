import { EIFoodOrderTakeoutMode } from "../enums/ifood-order-takeout-mode.enum";

export interface IIFoodOrderTakeout {
	mode: EIFoodOrderTakeoutMode;
	takeoutDateTime: string | Date;
}