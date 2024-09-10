
import { IProductV2 } from '../../../products-v2/interfaces/i-product-v2';
import { IProductSectionSchedule } from './i-product-section-schedule';

export class IProductSectionMenu {
    // #region Properties (12)

    
    public active: boolean;
    
    public id: string;
    
    public index: number;
    public product?: IProductV2;
    
    public name?: string;
    
    public price?: number;
    
    public productId: string;
    
    public promotional: boolean;
    
    public updatedAt: Date;
    
    public updatedBy: string;
    schedule: IProductSectionSchedule;
    
    public version: '1.0.2';

    // #endregion Properties (12)
}