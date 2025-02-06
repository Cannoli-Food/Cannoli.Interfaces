export interface IIFoodCategoryPizzaToppings {
    id: string;
    externalCode: string;
    name: string;
    description: string;
    imagePath: string;
    status: string; // 'AVAILABLE'
    dietaryRestrictions: string[];
    index: number;
    prices: {
        additionalProp1: {
            value: number;
            originalValue: number;
        };
        additionalProp2: {
            value: number;
            originalValue: number;
        };
        additionalProp3: {
            value: number;
            originalValue: number;
        };
    };
}
