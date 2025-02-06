import { IIFoodCategoryItems } from './i-ifood-category-items';
import { IIFoodCategoryPizza } from './i-ifood-category-pizza';

export interface IIFoodCategory {
    id: string;
    index: number;
    name: string;
    externalCode: string;
    status: string;
    items: IIFoodCategoryItems[];
    template: string;
    pizza: IIFoodCategoryPizza;
}
