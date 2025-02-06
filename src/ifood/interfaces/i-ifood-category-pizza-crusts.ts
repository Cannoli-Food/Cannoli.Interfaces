export interface IIFoodCategoryPizzaCrusts {
    id: string;
    name: string;
    status: string; // 'AVAILABLE'
    externalCode: string;
    index: number;
    price: {
        value: number;
        originalValue: number;
    };
}
