import { IProductSectionSchedule } from './i-product-section-schedule';
import { IProductV2 } from './i-product-v2';

export interface IProductSectionMenu {
    // #region Properties (12)

    
    active: boolean;
    
    id: string;
    
    index: number;
    product?: IProductV2;
    
    name?: string;
    
    price?: number;
    
    productId: string;
    
    promotional: boolean;
    
    updatedAt: Date;
    
    updatedBy: string;
    schedule: IProductSectionSchedule;
    
    version: '1.0.2';

    // #endregion Properties (12)
}