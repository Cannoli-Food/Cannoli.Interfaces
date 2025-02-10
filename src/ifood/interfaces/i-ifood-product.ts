import { EIFoodDietaryRestrictions } from '../enums/ifood-dietary-restrictions.enum';
import { EIFoodServing } from '../enums/ifood-serving.enum';
import { IIFoodOptionGroups } from './i-ifood-category-option-groups';
import { IIFoodSellingOptions } from './i-ifood-selling-options';
import { IIFoodShifts } from './i-ifood-shifts';
import { IIFoodWeight } from './i-ifood-weight';

export interface IIFoodProduct {
  id: string;
  name: string;
  description: string;
  additionalInformation: string;
  externalCode: string;
  image: string;
  shifts: IIFoodShifts;
  serving: EIFoodServing;
  dietaryRestrictions: EIFoodDietaryRestrictions[];
  tags: string[];
  ean: string;
  sellingOption: IIFoodSellingOptions;
  weight: IIFoodWeight;
  multipleImages: string;
  optionGroups: IIFoodOptionGroups;
}
