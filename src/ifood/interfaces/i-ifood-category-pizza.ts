import { IIFoodCategoryPizzaCrusts } from './i-ifood-category-pizza-crusts';
import { IIFoodCategoryPizzaEdges } from './i-ifood-category-pizza-edges';
import { IIFoodCategoryPizzaSizes } from './i-ifood-category-pizza-sizes';
import { IIFoodCategoryPizzaToppings } from './i-ifood-category-pizza-toppings';
import { IIFoodShifts } from './i-ifood-shifts';

export interface IIFoodCategoryPizza {
  id: string;
  sizes: IIFoodCategoryPizzaSizes[];
  crusts: IIFoodCategoryPizzaCrusts[];
  edges: IIFoodCategoryPizzaEdges[];
  toppings: IIFoodCategoryPizzaToppings[];
  shifts: IIFoodShifts[];
}
