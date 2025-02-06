import { IIFoodCategoryPizzaCrusts } from './i-ifood-category-pizza-crusts';
import { IIFoodCategoryPizzaEdges } from './i-ifood-category-pizza-edges';
import { IIFoodCategoryShifts } from './i-ifood-category-shifts';
import { IIFoodCategoryPizzaSizes } from './i-ifood-category-pizza-sizes';
import { IIFoodCategoryPizzaToppings } from './i-ifood-category-pizza-toppings';

export interface IIFoodCategoryPizza {
    id: string;
    sizes: IIFoodCategoryPizzaSizes[];
    crusts: IIFoodCategoryPizzaCrusts[];
    edges: IIFoodCategoryPizzaEdges[];
    toppings: IIFoodCategoryPizzaToppings[];
    shifts: IIFoodCategoryShifts[];
}
