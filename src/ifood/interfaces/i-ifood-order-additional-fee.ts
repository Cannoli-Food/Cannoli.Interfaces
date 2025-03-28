import { IIFoodOrderAdditionalFeeLiability } from "./i-ifood-order-additional-fee-liability";

export interface IIFoodOrderAdditionalFee {
  type: string;
  value: number;
  description: string;
  fullDescription: string;
  liabilities: IIFoodOrderAdditionalFeeLiability[];
}
