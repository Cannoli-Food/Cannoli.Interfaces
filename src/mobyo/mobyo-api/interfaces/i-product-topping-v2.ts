
import { CompanyInfo } from '../../../framework/decorators/company-info';
import { ProductSkillV2Enum } from '../../products-v2/interfaces/product-skill-v2.enum';
import { CreateProductToppingV2Dto } from '../dto/create.dto';

export class IProductToppingV2 {
    // #region Properties (14)

    
    public active: boolean;
    
    public code: string;
    
    public companyId?: string;
    
    public containerId: string;
    
    public createdAt: Date;
    
    public id?: string;
    
    public measure: string;
    
    public name: string;
    
    public price: number;
    public skill: ProductSkillV2Enum;
    public tags?: Array<string>;
    
    public updatedAt?: Date;
    
    public updatedBy?: string;
    
    public version: string;

    // #endregion Properties (14)
}

export const factoryProductToppingV2 = (
    companyInfo: CompanyInfo,
    body: CreateProductToppingV2Dto,
): IProductToppingV2 => {
    let price = body.price || 0;
    return {
        active: true,
        companyId: companyInfo.companyId,
        containerId: companyInfo.containerId,
        code: body.code || null,
        createdAt: new Date(),
        id: null,
        measure: body.measure || null,
        name: body.name || null,
        price,
        tags: body.tags || [],
        skill: ProductSkillV2Enum.simple,
        updatedAt: new Date(),
        updatedBy: body.updatedBy || null,
        version: '1.0.2',
    };
};
