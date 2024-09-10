
import { v4 as uuid } from 'uuid';
import { IProductOptionsTypeV2 } from '../../products-v2/interfaces/i-product-options-types';
import { IProductSizesV2 } from '../../products-v2/interfaces/i-product-sizes-v2';
import { UpdateOptionsV2Dto } from '../dto/update-options.dto';

export class IQuestionOptionsV2 {
    // #region Properties (20)

    
    public active: boolean;
    
    public additionalPrice: number;
    
    code?: string;
    public createdAt: Date;
    
    public createdBy: string;
    
    public description: string;
    
    public discount: number;
    
    public id: string;
    
    public imageURL: string;
    
    index?: number;
    
    public max: number;
    
    public min: number;
    
    name?: string;
    
    public preparationPlaceId: string;
    
    price?: number;
    
    productId?: string;
    
    public promotional: boolean;
    
    public updatedAt: Date;
    
    public updatedBy: string;
    
    public version: '1.0.2';

    // #endregion Properties (20)
}

export const factoryQuestionOptionsV2 = (body: UpdateOptionsV2Dto[]): IQuestionOptionsV2[] => {
    const res = [];
    // for with index
    for (let i = 0; i < body.length; i++) {
        const ref = {
            active: true,
            additionalPrice: body[i].additionalPrice || 0,
            code: body[i].code || '',
            createdAt: new Date(),
            createdBy: body[i].createdBy || '',
            discount: body[i].discount || 0,
            id: uuid().replace(/\-/g, '').toUpperCase(),
            index: body[i].index || i,
            max: body[i].max || 0,
            min: body[i].min || 0,
            name: body[i].name || '',
            price: body[i].price || 0,
            productId: body[i].productId || '',
            promotional: body[i].promotional || false,
            preparationPlaceId: body[i].preparationPlaceId || '',
            updatedAt: new Date(),
            updatedBy: body[i].createdBy || '',
            version: '1.0.2',
        };
        res.push(ref);
    }
    return res;
};

export const factoryQuestionOptionsBySizes = (body: IProductSizesV2[]): IQuestionOptionsV2[] => {
    const options = [];
    body.forEach((res, index) => {
        options.push({
            active: true,
            code: res.code,
            createdBy: '',
            id: uuid().replace(/-/g, '').toUpperCase(),
            index,
            max: 1,
            min: 0,
            name: res.name,
            price: res.price,
            discount: 0,
            additionalPrice: 0,
            productId: '',
            promotional: false,
            updatedAt: new Date(),
            updatedBy: '',
            version: '1.0.2',
            createdAt: new Date(),
        } as IQuestionOptionsV2);
    });
    return options;
};
export const factoryQuestionOptionsByTypes = (body: IProductOptionsTypeV2[]): IQuestionOptionsV2[] => {
    const options = [];
    body.forEach((res, index) => {
        options.push({
            active: true,
            code: res.code,
            createdBy: '',
            id: uuid().replace(/-/g, '').toUpperCase(),
            index,
            max: 1,
            min: 0,
            name: res.name,
            price: res.modularPrice,
            discount: 0,
            additionalPrice: 0,
            productId: '',
            promotional: false,
            updatedAt: new Date(),
            updatedBy: '',
            version: '1.0.2'
        } as IQuestionOptionsV2);
    });
    return options;
};