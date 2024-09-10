import { CreateDelivererDto } from '../dto/create-deliverer.dto';

import { IEntity } from '../../../entities/i-entity';
import { CompanyInfo } from '../../../framework/decorators/company-info';

import * as md5 from 'md5';
import { v4 as uuid } from 'uuid';
import { CreateDelivererV2Dto } from '../dto/create-deliverer-v2.dto';

export class IDeliverer extends IEntity {
    // #region Properties (8)

    cellPhone: string;
    email?: string;
    name: string;
    nickName: string;
    tags: string[];
    ordersCountDeliveredOnRestaurant: [];
    pictureUrl?: string;

    // #endregion Properties (8)
}

export function factoryDeliverer(
    companyInfo: CompanyInfo,
    body: CreateDelivererDto,
) {
    const data = {
        active: true,
        cellPhone: body?.cellPhone.replace(/\D/g, ''),
        companyId: companyInfo.companyId,
        containerId: companyInfo.containerId,
        createdAt: new Date(),
        email: body.email ? body.email : '',
        id: uuid().replace(/-/g, '').toUpperCase(),
        nickName: body.nickName,
        tags: [],
        name: body.name,
        ordersCountDeliveredOnRestaurant: [],
        pictureUrl: body.pictureUrl
            ? body.pictureUrl
            : `https://www.gravatar.com/avatar/${md5(
                  body.email ? body.email : body?.cellPhone || body.name,
              )}?d=wavatar`,
        updatedAt: new Date(),
    } as IDeliverer;
    return data;
}
export function factoryDelivererV2(
    companyInfo: CompanyInfo,
    body: CreateDelivererV2Dto,
) {
    const data = {
        active: true,
        cellPhone: body?.cellPhone.replace(/\D/g, ''),
        companyId: companyInfo.companyId,
        containerId: companyInfo.containerId,
        createdAt: new Date(),
        email: body.email ? body.email : '',
        id: body.uniqueId
            ? body.uniqueId
            : uuid().replace(/-/g, '').toUpperCase(),
        nickName: body.nickName,
        tags: [],
        name: body.name,
        ordersCountDeliveredOnRestaurant: [],
        pictureUrl: body.pictureUrl
            ? body.pictureUrl
            : `https://www.gravatar.com/avatar/${md5(
                  body.email ? body.email : body.nickName || body.name,
              )}?d=wavatar`,
        updatedAt: new Date(),
    } as IDeliverer;
    return data;
}

export const delivererTagsGenerator = (deliverer: IDeliverer): string[] => {
    if (!deliverer) {
        return [];
    }
    let tags = [];
    if (deliverer?.cellPhone) {
        const phone = deliverer?.cellPhone.replace(/\D/g, '');
        tags.push(phone);
        if (phone.length > 9) {
            tags.push(phone.substring(2));
        }
        if (phone.length === 8) {
            tags.push(phone.substring(0, 4));
        }
        if (phone.length === 9) {
            tags.push(phone.substring(0, 5));
        }
        if (phone.length === 10) {
            tags.push(phone.substring(2, 6));
        }
        if (phone.length === 11) {
            tags.push(phone.substring(2, 7));
            tags.push(phone.substring(0, 7));
        }
    }
    if (deliverer.email) {
        tags.push(deliverer.email);
    }
    if ((deliverer as any).name) {
        (deliverer as any).name = (deliverer as any).name.toLowerCase();
        (deliverer as any).name = (deliverer as any).name.replace(
            new RegExp('[ÁÀÂÃ]', 'gi'),
            'a',
        );
        (deliverer as any).name = (deliverer as any).name.replace(
            new RegExp('[ÉÈÊ]', 'gi'),
            'e',
        );
        (deliverer as any).name = (deliverer as any).name.replace(
            new RegExp('[ÍÌÎ]', 'gi'),
            'i',
        );
        (deliverer as any).name = (deliverer as any).name.replace(
            new RegExp('[ÓÒÔÕ]', 'gi'),
            'o',
        );
        (deliverer as any).name = (deliverer as any).name.replace(
            new RegExp('[ÚÙÛ]', 'gi'),
            'u',
        );
        (deliverer as any).name = (deliverer as any).name.replace(
            new RegExp('[Ç]', 'gi'),
            'c',
        );
        (deliverer as any).name = (deliverer as any).name.toUpperCase();
        const words = (deliverer as any).name.split(' ');
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
        let inits = (deliverer as any).name.substring(0, 4).toUpperCase();
        if (inits.length > 2) {
            tags.push(inits);
        }
    }
    return tags;
};
