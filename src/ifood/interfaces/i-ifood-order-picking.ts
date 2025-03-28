import { EIFoodPickingReplacementOptions } from "../enums/ifood-picking-replacement-options.enum";

export interface IIFoodOrderPicking {
	description?: string;
	picker: string;
	replacementOptions: EIFoodPickingReplacementOptions;
}