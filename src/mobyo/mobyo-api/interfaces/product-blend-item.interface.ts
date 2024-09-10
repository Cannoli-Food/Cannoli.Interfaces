import { ProductBlendItemProduct } from './product-blend-item-product.interface';

export interface ProductBlendItem {
    name: string;
    price: string;
    items: ProductBlendItemProduct[];
    sequence: number;
}
