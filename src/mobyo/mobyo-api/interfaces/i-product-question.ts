
import { v4 as uuid } from 'uuid';
import { IProductOptionsV2 } from '../../../products-v2/interfaces/i-product-options-v2';
import { IProductSizesV2 } from '../../../products-v2/interfaces/i-product-sizes-v2';
import { factoryQuestionBySizes, factoryQuestionByTypes, IQuestionV2 } from '../../../questions-v2/interfaces/i-question';

export class IProductQuestion {
    // #region Properties (12)

    
    public questionId: string;
    
    public id: string;
    public question?: IQuestionV2;
    
    public index: number;
    
    public updatedAt: Date;
    
    public updatedBy: string;
    
    public version: '1.0.2';

    // #endregion Properties (12)
}
export const factoryProductQuestionBySizes = (body: IProductSizesV2[]): IProductQuestion => {
    const questionId = `SIZE - ${uuid().replace(/-/g, '').toUpperCase()}`;
    return {
        questionId,
        id: `SIZE - ${uuid().replace(/-/g, '').toUpperCase()}`,
        question: factoryQuestionBySizes(body, questionId),
        index: -2,
        updatedAt: new Date(),
        updatedBy: 'system',
        version: '1.0.2'
    };
};
export const factoryProductQuestionByTypes = (body: IProductOptionsV2): IProductQuestion => {
    const questionId = `TYPE - ${uuid().replace(/-/g, '').toUpperCase()}`;
    return {
        questionId,
        id: `TYPE - ${uuid().replace(/-/g, '').toUpperCase()}`,
        question: factoryQuestionByTypes(body, questionId),
        index: - 1,
        updatedAt: new Date(),
        updatedBy: 'system',
        version: '1.0.2'
    };
};