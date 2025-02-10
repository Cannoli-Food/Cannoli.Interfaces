import { EIFoodDietaryRestrictions } from '../enums/ifood-dietary-restrictions.enum';
import { EIFoodServing } from '../enums/ifood-serving.enum';
import { IIFoodOptionGroups } from './i-ifood-option-groups';
import { IIFoodPrice } from './i-ifood-price';
import { IIFoodSellingOptions } from './i-ifood-selling-options';
import { IIFoodShifts } from './i-ifood-shifts';

export interface IIFoodCategoryItems {
  id: string;
  name: string;
  description: string;
  additionalInformation: string;
  externalCode: string;
  status: string; // 'AVAILABLE'
  productId: string;
  index: number;
  imagePath: string;
  price: IIFoodPrice;
  shifts: IIFoodShifts[];
  serving: EIFoodServing;
  dietaryRestrictions: EIFoodDietaryRestrictions[]; // ['ORGANIC', 'VEGAN']
  ean: string;
  optionGroups: IIFoodOptionGroups[];
  sellingOption: IIFoodSellingOptions;
  tags: string[]; // ['FROSTY']
  hasOptionGroups: boolean;
}
