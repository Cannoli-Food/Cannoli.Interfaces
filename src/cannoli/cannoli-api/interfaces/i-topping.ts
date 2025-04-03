import { IProductCategory } from "./i-product-category";
import { IProductBase } from "./product-interface";

export interface ITopping extends IProductBase {
    code: string;
    price: number;
    measure: string;
    name: string;
    category: IProductCategory;
}
