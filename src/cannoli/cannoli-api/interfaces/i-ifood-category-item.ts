export interface IIFoodCategoryItem {
    id: string;
    externalCode: string;
    name: string;
    description: string;
    availability: 'AVAILABLE' | 'UNAVAILABLE';
    order: string;
}
