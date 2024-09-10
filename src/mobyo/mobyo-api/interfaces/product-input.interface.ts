import { IProductBase } from './product-interface';

export interface ProductInput extends IProductBase {
    cost: number;
    linkedProducts: number;
    category: {
        categoryId: string,
        categoryName: string,
    };
    stock: {
        active: number,
        min: number,
        available: number,
    };
}
