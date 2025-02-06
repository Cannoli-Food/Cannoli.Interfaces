export interface IIFoodCategoryPizzaSizes {
    id: string;
    name: string;
    index: number;
    status: string; // 'AVAILABLE'
    externalCode: string;
    slices: number;
    acceptedFractions: number[];
    price: {
        value: number;
        originalValue: number;
    };
}
