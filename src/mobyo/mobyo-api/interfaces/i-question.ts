
import { IProductOptionsV2 } from '../../products-v2/interfaces/i-product-options-v2';
import { IProductSizesV2 } from '../../products-v2/interfaces/i-product-sizes-v2';
import { CreateQuestionV2Dto } from '../dto/create.dto';
import { factoryQuestionOptionsBySizes, factoryQuestionOptionsByTypes, factoryQuestionOptionsV2, IQuestionOptionsV2 } from './i-question-options';
import { QuestionTypes } from './question-type.enum';

export class IQuestionV2 {
    // #region Properties (14)

    
    public active: boolean;
    
    public additionalPrice: number;
    
    public createdAt: Date;
    
    public description: string;
    
    public discount: number;
    
    id?: string;
    
    index?: number;
    
    public max: number;
    
    public mix: number;
    
    public min: number;
    public skill: QuestionTypes;
    
    public name: string;
    public options: IQuestionOptionsV2[];
    
    required?: boolean;
    
    public updatedAt: Date;
    
    public version: '1.0.2';
    public tags: string[];

    // #endregion Properties (14)
}

export const factoryQuestionV2 = (body: CreateQuestionV2Dto): IQuestionV2 => {
    return {
        active: true,
        additionalPrice: body.additionalPrice || 0,
        options: factoryQuestionOptionsV2(body.options),
        createdAt: null,
        description: body.description || '',
        discount: body.discount || 0,
        id: null,
        skill: body.skill,
        mix: body.mix || 1,
        max: body.max || 1,
        min: body.min || 0,
        name: body.name || '',
        required: body.min > 0 ? true : false,
        updatedAt: new Date(),
        version: '1.0.2',
        tags: tagsQuestionsGenerator(body)
    };
};

export const factoryQuestionBySizes = (body: IProductSizesV2[], id: string): IQuestionV2 => ({
    active: true,
    additionalPrice: 0,
    createdAt: new Date(),
    description: '',
    discount: 0,
    id,
    max: 1,
    min: 1,
    mix: 1,
    skill: QuestionTypes.observation,
    name: 'Escolha uma opção',
    options: factoryQuestionOptionsBySizes(body),
    required: true,
    updatedAt: new Date(),
    version: '1.0.2',
    tags: []
});
export const factoryQuestionByTypes = (body: IProductOptionsV2, id: string): IQuestionV2 => ({
    active: true,
    additionalPrice: 0,
    createdAt: new Date(),
    description: '',
    discount: 0,
    id,
    max: 1,
    min: 1,
    mix: body.mix || 1,
    skill: QuestionTypes.observation,
    name: `Escolha ${body.mix > 1 ? 'até ' + body.mix + ' opções' : 'uma opção'}`,
    options: factoryQuestionOptionsByTypes(body.types),
    required: true,
    updatedAt: new Date(),
    version: '1.0.2',
    tags: []
});
export const tagsQuestionsGenerator = (question: IQuestionV2 | CreateQuestionV2Dto): string[] => {
    if (!question) { return []; }
    let tags = [];
    if ((question as any).description) {
        (question as any).description = (question as any).description.toLowerCase();
        (question as any).description = (question as any).description.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        (question as any).description = (question as any).description.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        (question as any).description = (question as any).description.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        (question as any).description = (question as any).description.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        (question as any).description = (question as any).description.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        (question as any).description = (question as any).description.replace(new RegExp('[Ç]', 'gi'), 'c');
        (question as any).description = (question as any).description.toUpperCase();
        const words = ((question as any).description).split(' ');
        words.forEach((w: string) => {
            if (w.length > 2 && w !== 'DE' && w !== 'DA' && w !== 'DO' && w !== 'DAS' && w !== 'DOS') {
                tags.push(w.toUpperCase());
            }
        });
    }
    if ((question as any).name) {
        (question as any).name = (question as any).name.toLowerCase();
        (question as any).name = (question as any).name.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        (question as any).name = (question as any).name.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        (question as any).name = (question as any).name.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        (question as any).name = (question as any).name.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        (question as any).name = (question as any).name.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        (question as any).name = (question as any).name.replace(new RegExp('[Ç]', 'gi'), 'c');
        (question as any).name = (question as any).name.toUpperCase();
        const words = ((question as any).name).split(' ');
        words.forEach((w: string) => {
            if (w.length > 2 && w !== 'DE' && w !== 'DA' && w !== 'DO' && w !== 'DAS' && w !== 'DOS') {
                tags.push(w.toUpperCase());
            }
        });
        const inits = ((question as any).name).substring(0, 4).toUpperCase();
        if(inits.length > 2) { tags.push(inits); }
    }
    if (question.skill) { tags.push(question.skill); }
    return tags;
};