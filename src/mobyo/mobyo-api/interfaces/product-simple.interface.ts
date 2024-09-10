import { v4 as uuid } from 'uuid';
import { CompanyInfo } from '../../../../framework/decorators/company-info';
import { IProductBase } from '../../interfaces/product-interface';
import { CreateSimpleDto } from '../dto/create-product-simple.dto';
import { ProductSimpleQuestion } from './product-simple-question.interface';

export interface IProductSimple extends IProductBase {
    // #region Properties (8)

    category: {
        id: string;
        name: string;
    };
    description?: string;
    globals: {
        id: string;
        version: string;
    };
    gtinEan?: string;
    preparationPlace: string;
    price: number;
    questions: ProductSimpleQuestion[];
    weight: number;

    // #endregion Properties (8)
}

export function factoryProductSimple(
    companyInfo: CompanyInfo,
    body: CreateSimpleDto,
): IProductSimple {
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
        description: body.description || null,
        globals: {
            id: body.globalsRef || null,
            version: body.globalsRefVersion || null,
        },
        details: {
            organic: body.details?.organic || false,
            noGluten: body.details?.noGluten || false,
            noSugar: body.details?.noSugar || false,
            noDairy: body.details?.noDairy || false,
            sauceSpicy: body.details?.sauceSpicy || 0,
            vegetarian: body.details?.vegetarian || false,
            vegan: body.details?.vegan || false,
        },
        gtinEan: body.gtinEan || null,
        id: body.id || uuid().replace(/\-/g, '').trim().toUpperCase(),
        imageURL: body.imageURL || null,
        isPaused: false,
        measure: body.measure || 'UN',
        name: body.name,
        preparationPlace: body.preparationPlace || null,
        price: body.price || 0,
        questions: [],
        serving: body.serving,
        skill: 'SIMPLE',
        updatedAt: new Date(),
        version: '1.0.0',
        weight: body.weight || 0,
    } as IProductSimple;
}
