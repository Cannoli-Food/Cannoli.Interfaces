import { IProductSectionMenu } from "./i-product-section-menu";

export interface ISectionMenu {
    // #region Properties (10)

    
    active: boolean;
    
    companyId: string;
    
    containerId: string;
    
    createdAt: Date;
    
    id: string;
    
    imageURL: string;
    
    name: string;
    
    description: string;
    
    updatedAt: Date;
    
    updatedBy: string;
    
    index: number;
    products?: IProductSectionMenu[];
    
    version: '1.0.2';
    // #endregion Properties (10)
}
