import { IProductBase } from "./product-interface";

export interface IProduct extends IProductBase {
    id: string;
    cost: number;
    category: {
        id: string,
        name: string,
    };
    status: string;
    minStock: number;
    controlStock: boolean;
    actualStock: number;
    createdAt: Date;
    updatedAt: Date;

    name: string;
    code: string;
    measure: string;
    imageURL: string;
    skill: 'SIMPLE' | 'PARENT' | 'CHILD' | 'INPUT' | 'TOPPING' | 'BLEND';
    containerId: string;
    details: {
        organic: boolean,
        noGluten: boolean,
        noSugar: boolean,
        noDairy: boolean,
        sauceSpicy: number,
        vegetarian: boolean,
        vegan: boolean,
    };
    serving: number;
    companyId: string;
    /**
     * @deprecated Use `preparationPlaceId` instead
     */
    preparationPlace: string;
    preparationPlaceId: string;
    questions: Array<{ id: string, sequence: number }>;
    weight: number;
}
