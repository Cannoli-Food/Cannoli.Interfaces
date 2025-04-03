import { ProductBlendItem } from './product-blend-item.interface';
import { IProductBase } from './product-interface';

export interface ProductBlend extends IProductBase {
    category: {
        id: string,
        name: string,
    };
    cost: string;
    description: string;
    items: ProductBlendItem[];
    price: string;
    sequence: number;
    updatedAt: Date;
}

