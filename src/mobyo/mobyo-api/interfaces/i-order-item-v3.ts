// import { SetOrderItemV3Dto } from '../usercases-v3/set-item-v3/set-item-v3.dto';

import { IOrderItemComposition } from './i-order-item-composition';
import { IOrderItemOptionV3 } from './i-order-item-option-v3';
import { IOrderItemScaleV3 } from './i-order-item-scales-v3';
export class IOrderItemScalePricesV3 {
    
    defaultPrice: number;
    scales: IOrderItemScaleV3[];
}

export class IOrderItemV3 {
    // #region Properties (19)

    
    public ean: string;
    
    public externalCode: string;
    
    public id: string;
    
    public index: number;
    
    public name: string;
    public composition: IOrderItemComposition[];
    
    public observations: string;
    public options: IOrderItemOptionV3[];
    
    public optionsPrice: number;
    
    public picture: string;
    
    public preparationPlaceId: string;
    
    public price: number;
    
    public quantity: number;
    public scalePrices: IOrderItemScalePricesV3;
    
    public skill: string;
    
    public totalPrice: number;
    
    public unit: string;
    
    public unitPrice: number;
    
    public weight: number;

    // #endregion Properties (19)
}
