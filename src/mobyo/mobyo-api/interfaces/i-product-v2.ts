import { CompanyInfo } from '../../../framework/decorators/company-info';
import { IProductQuestion } from '../../menus-v2/coll-product-questions/interfaces/i-product-question';
import { CreateProductV2Dto } from '../dto/create.dto';
import { IProductComposition } from './i-product-composition';
import { IProductDetailV2 } from './i-product-detail-v2';
import { IProductOptionsV2 } from './i-product-options-v2';
import { IProductSizesV2 } from './i-product-sizes-v2';
import { ProductHighlightEnum } from './product-highlight-v2.enum';
import { ProductSkillV2Enum } from './product-skill-v2.enum';

export class IProductV2 {
    // #region Properties (24)

    
    public active: boolean;
    
    public code: string;
    
    public companyId?: string;
    public composition: IProductComposition[];
    
    public containerId: string;
    
    public createdAt: Date;
    
    public description?: string;
    public details: IProductDetailV2;
    
    public id?: string;
    public highlights?: ProductHighlightEnum[];
    
    public imageURL?: string;
    
    public measure: string;
    
    public name: string;
    public options: IProductOptionsV2;
    
    public preparationPlaceId?: string;
    
    public price: number;
    public questions?: IProductQuestion[];
    
    public serving: number;
    public sizes: IProductSizesV2[];
    public skill: ProductSkillV2Enum;
    public tags?: Array<string>;
    public tags2?: Array<string>;
    
    public updatedAt?: Date;
    
    public updatedBy?: string;
    
    public version: string;
    
    public weight: number;

    // #endregion Properties (24)
}

export const factoryProductV2 = (
    companyInfo: CompanyInfo,
    body: CreateProductV2Dto,
): IProductV2 => {
    return {
        active: true,
        companyId: companyInfo.companyId,
        containerId: companyInfo.containerId,
        code: body.code || null,
        createdAt: new Date(),
        description: body.description || null,
        details: body.details || null,
        id: null,
        highlights: body.highlights || [],
        imageURL: null,
        sizes: body.sizes || [],
        options: body.options || null,
        composition: body.composition || [],
        measure: body.measure || null,
        name: body.name || null,
        preparationPlaceId: body.preparationPlaceId || null,
        price: body.price || 0,
        questions: [],
        serving: body.serving || 1,
        tags: body.tags || [],
        tags2: [],
        skill: body.skill || ProductSkillV2Enum.simple,
        updatedAt: new Date(),
        updatedBy: body.updatedBy || null,
        version: '1.0.2',
        weight: body.weight || 0,
    };
};

export const tagsProductGenerator = (item: IProductV2): string[] => {
    if (!item) {
        return [];
    }
    let tags = [];
    if (item.name) {
        item.name = item.name.toLowerCase();
        item.name = item.name.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        item.name = item.name.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        item.name = item.name.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        item.name = item.name.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        item.name = item.name.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        item.name = item.name.replace(new RegExp('[Ç]', 'gi'), 'c');
        item.name = item.name.toUpperCase();
        const words = (item as any).name.split(' ');
        words.forEach((w: string) => {
            if (
                w.length > 2 &&
                w !== 'DE' &&
                w !== 'DA' &&
                w !== 'DO' &&
                w !== 'DAS' &&
                w !== 'DOS'
            ) {
                tags.push(w.toUpperCase());
            }
        });
        const inits = (item as any).name.substring(0, 4).toUpperCase();
        if (inits.length > 2) {
            tags.push(inits);
        }
    }
    if (item.details.kosher) {
        tags.push('KOSHER');
    } else {
        const i = tags.indexOf('KOSHER');
        if (i > -1) {
            tags.splice(i, 1);
        }
    }
    if (item.details.vegan) {
        tags.push('VEGAN');
    } else {
        const i = tags.indexOf('VEGAN');
        if (i > -1) {
            tags.splice(i, 1);
        }
    }
    if (item.details.vegetarian) {
        tags.push('VEGETARIAN');
    } else {
        const i = tags.indexOf('VEGETARIAN');
        if (i > -1) {
            tags.splice(i, 1);
        }
    }
    if (item.details.noGluten) {
        tags.push('SEM GLUTEN');
        tags.push('GLUTEN');
    } else {
        const i3 = tags.indexOf('SEM GLUTEN');
        if (i3 > -1) {
            tags.splice(i3, 1);
        }
        const i4 = tags.indexOf('GLUTEN');
        if (i4 > -1) {
            tags.splice(i4, 1);
        }
    }
    if (item.details.noDairy) {
        tags.push('SEM LACTOSE');
        tags.push('LACTOSE');
    } else {
        const i = tags.indexOf('SEM LACTOSE');
        if (i > -1) {
            tags.splice(i, 1);
        }
        const i2 = tags.indexOf('LACTOSE');
        if (i2 > -1) {
            tags.splice(i2, 1);
        }
    }
    if (item.details.noSugar) {
        tags.push('SEM ACUCAR');
        tags.push('ACUCAR');
    } else {
        const i5 = tags.indexOf('SEM ACUCAR');
        if (i5 > -1) {
            tags.splice(i5, 1);
        }
        const i6 = tags.indexOf('ACUCAR');
        if (i6 > -1) {
            tags.splice(i6, 1);
        }
    }
    if (item.details.organic) {
        tags.push('ORGANICO');
    } else {
        const i2 = tags.indexOf('ORGANICO');
        if (i2 > -1) {
            tags.splice(i2, 1);
        }
    }
    if (item.code) {
        tags.push(item.code.toUpperCase());
    }
    if (item.highlights && item.highlights.length > 0) {
        item.highlights.forEach((h: string) => {
            tags.push(h.toUpperCase());
        });
    }
    return tags;
};
