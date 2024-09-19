import { IProductBase } from './product-interface';
import { ProductSimpleQuestion } from './product-simple-question.interface';

export interface IProductSimple extends IProductBase {
    // #region Properties (8)

    category: {
        id: string;
        name: string;
    };
    description?: string;
    globals: {
        id: string;
        version: string;
    };
    gtinEan?: string;
    preparationPlace: string;
    price: number;
    questions: ProductSimpleQuestion[];
    weight: number;

    // #endregion Properties (8)
}

