import { CompanyInfo } from '../../../framework/decorators/company-info';
import { IToken } from '../../tokens/i-token';
import { ISectionMenu } from '../coll-sections/interfaces/i-section-menu';
import { CreateMenuV2Dto } from '../dto-v2/create.dto';
import { factoryMenuScheduleV2, IMenuScheduleV2 } from './i-menu-schedule-v2';

export class IMenuV2 {
    // #region Properties (15)

    public active: boolean;
    public companyId: string;
    public containerId: string;
    public createdAt: Date;
    public id: string;
    public imageHeaderURL: string;
    public imageURL: string;
    /** Value input just on get all deviceMenus */
    index?: number;
    public name: string;
    referenceId?: string;
    public schedule: IMenuScheduleV2;
    public sections?: ISectionMenu[];
    tags?: string[];
    public updatedAt: Date;
    public version: '1.0.2';

    // #endregion Properties (15)
}

export const factoryMenuV2 = (token: IToken, deviceId: string): IMenuV2 => {
    return {
        active: true,
        companyId: token.companyId,
        containerId: token.containerId,
        createdAt: new Date(),
        id: null,
        imageURL: null,
        imageHeaderURL: null,
        name: null,
        tags: [],
        sections: [],
        schedule: factoryMenuScheduleV2(),
        updatedAt: new Date(),
        version: '1.0.2',
    };
};
export const factoryNewMenuV2 = (
    companyInfo: CompanyInfo,
    body: CreateMenuV2Dto,
): IMenuV2 => {
    return {
        active: true,
        companyId: companyInfo.companyId,
        containerId: companyInfo.containerId,
        createdAt: new Date(),
        id: null,
        imageURL: null,
        imageHeaderURL: null,
        name: body.name || null,
        sections: [],
        tags: [],
        schedule: body.schedule || factoryMenuScheduleV2(),
        updatedAt: new Date(),
        version: '1.0.2',
    };
};

export const menuV2TagsGenerator = (name: string): string[] => {
    if (!name) {
        return [];
    }
    let tags = [];
    if (name) {
        name = name.toLowerCase();
        name = name.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        name = name.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        name = name.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        name = name.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        name = name.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        name = name.replace(new RegExp('[Ç]', 'gi'), 'c');
        name = name.toUpperCase();
        const words = name.split(' ');
        words.forEach((w: string) => {
            if (
                w.length > 2 &&
                w !== 'DE' &&
                w !== 'DA' &&
                w !== 'DO' &&
                w !== 'DAS' &&
                w !== 'DOS'
            ) {
                tags.push(w);
            }
        });
        let inits = name.substring(0, 4);
        if (inits.length > 2) {
            tags.push(inits);
        }
    }
    return tags;
};
