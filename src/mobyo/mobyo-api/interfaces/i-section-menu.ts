
import { CompanyInfo } from '../../../../framework/decorators/company-info';
import { IProductSectionMenu } from '../../coll-products-section-menu/interfaces/i-product-section-menu';
import { CreateSectionMenuDto } from '../dto/create.dto';

export class ISectionMenu {
    // #region Properties (10)

    
    public active: boolean;
    
    public companyId: string;
    
    public containerId: string;
    
    public createdAt: Date;
    
    public id: string;
    
    public imageURL: string;
    
    public name: string;
    
    public description: string;
    
    public updatedAt: Date;
    
    public updatedBy: string;
    
    public index: number;
    public products?: IProductSectionMenu[];
    
    public version: '1.0.2';
    // #endregion Properties (10)
}

export const factorySectionMenu = (
    companyInfo: CompanyInfo,
    body: CreateSectionMenuDto,
): ISectionMenu => {
    return {
        active: true,
        companyId: companyInfo.companyId,
        containerId: companyInfo.containerId,
        createdAt: new Date(),
        id: null,
        imageURL: null,
        name: body.name || null,
        index: 0,
        description: body.description || null,
        products: [],
        updatedAt: new Date(),
        updatedBy: body.updatedBy || null,
        version: '1.0.2',
    };
};
