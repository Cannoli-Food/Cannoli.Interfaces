import { IIFoodPrice } from './i-ifood-price';

export interface IIFoodOptionGroupsOptions {
  id: string;
  status: string; // 'AVAILABLE'
  index: number;
  productId: string;
  name: string;
  description: string;
  externalCode: string;
  imagePath: string;
  price: IIFoodPrice;
  ean: string;
}
