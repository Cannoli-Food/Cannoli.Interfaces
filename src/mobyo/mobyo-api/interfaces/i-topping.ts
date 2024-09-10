import { CompanyInfo } from '../../../../framework/decorators/company-info';
import { IProductCategory } from '../../../product-categories/i-product-category';
import { IProductBase } from '../../interfaces/product-interface';
import { CreateToppingDto } from '../dto/create-topping.dto';

export interface ITopping extends IProductBase {
    code: string;
    price: number;
    measure: string;
    name: string;
    category: IProductCategory;
}

export function factoryTopping(
    companyInfo: CompanyInfo,
    body: CreateToppingDto,
): ITopping {
    return {
        active: true,
        category: {
            id: body.category?.id,
            name: body.category?.name || null,
        },
        createdAt: new Date(),
        code: body.code,
        companyId: companyInfo.companyId,
        containerId: companyInfo.containerId,
        measure: body.measure || 'UN',
        name: body.name,
        price: body.price || 0,
    } as ITopping;
}
