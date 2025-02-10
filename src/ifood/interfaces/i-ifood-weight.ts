import { EIFoodUnit } from "../enums/ifood-unit.enum";

export interface IIFoodWeight {
  description: string;
  quantity: number;
  unit: EIFoodUnit;
}