import { IIFoodCategoryItemsOptionGroups } from './i-ifood-category-items-option-groups';
import { IIFoodCategoryItemsPrice } from './i-ifood-category-items-price';
import { IIFoodCategoryItemsSellingOptions } from './i-ifood-category-items-selling-options';
import { IIFoodCategoryShifts } from './i-ifood-category-shifts';

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
  price: IIFoodCategoryItemsPrice;
  shifts: IIFoodCategoryShifts[];
  serving: string; // 'SERVES_2'
  dietaryRestrictions: string[]; // ['ORGANIC', 'VEGAN']
  ean: string;
  optionGroups: IIFoodCategoryItemsOptionGroups[];
  sellingOption: IIFoodCategoryItemsSellingOptions;
  tags: string[]; // ['FROSTY']
  hasOptionGroups: true;
}
