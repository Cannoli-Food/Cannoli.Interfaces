import { EIFoodSellingOptions } from "../enums/ifood-selling-options.enum";

export interface IIFoodSellingOptions {
  minimum: number;
  incremental: number;
  availableUnits: EIFoodSellingOptions[]; // ['WEIGHT']
  averageUnit: number;
}
