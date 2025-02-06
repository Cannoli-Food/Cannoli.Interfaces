import { IIFoodCategoryItemsPrice } from './i-ifood-category-items-price';

export interface IIFoodCategoryItemsOptionGroups {
  id: string;
  name: string;
  externalCode: string;
  status: string; // 'AVAILABLE'
  index: number;
  min: number;
  max: number;
  options: IIFoodCategoryItemsOptions;
}

export interface IIFoodCategoryItemsOptions {
  id: string;
  status: string; // 'AVAILABLE'
  index: number;
  productId: string;
  name: string;
  description: string;
  externalCode: string;
  imagePath: string;
  price: IIFoodCategoryItemsPrice;
  ean: string;
}
