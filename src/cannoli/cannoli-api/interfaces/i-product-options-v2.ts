
import { IProductOptionsTypeV2 } from './i-product-options-types';

export interface IProductOptionsV2 {
    // #region Properties (8)

    
    title: string;
    mix: number;
    setAllToMax: boolean;
    types: IProductOptionsTypeV2[];

    // #endregion Properties (8)
}
