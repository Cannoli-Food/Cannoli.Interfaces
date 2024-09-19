import { IOrderItemComposition } from './i-order-item-composition';
import { IOrderItemOptionV3 } from './i-order-item-option-v3';
import { IOrderItemScaleV3 } from './i-order-item-scales-v3';
export interface IOrderItemScalePricesV3 {
    
    defaultPrice: number;
    scales: IOrderItemScaleV3[];
}

export interface IOrderItemV3 {
    // #region Properties (19)

    
    ean: string;
    
    externalCode: string;
    
    id: string;
    
    index: number;
    
    name: string;
    composition: IOrderItemComposition[];
    
    observations: string;
    options: IOrderItemOptionV3[];
    
    optionsPrice: number;
    
    picture: string;
    
    preparationPlaceId: string;
    
    price: number;
    
    quantity: number;
    scalePrices: IOrderItemScalePricesV3;
    
    skill: string;
    
    totalPrice: number;
    
    unit: string;
    
    unitPrice: number;
    
    weight: number;

    // #endregion Properties (19)
}
