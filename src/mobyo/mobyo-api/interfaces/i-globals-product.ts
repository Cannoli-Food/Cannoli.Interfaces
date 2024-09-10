import { CompanyInfo } from '../../../framework/decorators/company-info';
import { CreateGlobalsProductDto } from '../dto/create-globals-product.dto';
import { IRating } from './i-globals-rating';
import { IGlobalsUtilization } from './i-globals-utilizations';

export interface IGlobalsProduct {
    // #region Properties (18)

    active: boolean;
    companyId: string;
    createdAt: Date;
    createdBy: {
        id: string;
        companyName: string;
        name: string;
        photoURL: string;
    };
    description: string;
    gtinEan: string;
    id: string;
    imageURL: string;
    measure: string;
    moderated: boolean;
    moderatedAt: Date;
    moderatedBy: string;
    name: string;
    rate: number;
    rates: IRating[];
    updatedAt: Date | number;
    utilizations: IGlobalsUtilization[];
    version: string;

    // #endregion Properties (18)
}

export function factoryGlobalsProduct(
    companyInfo: CompanyInfo,
    body: CreateGlobalsProductDto,
) {
    return {
        active: true,
        companyId: companyInfo.companyId,
        createdBy: {
            id: companyInfo.memberId,
            companyName: body.createdByCompanyName,
            name: companyInfo.memberName,
            photoURL: body.createdByPhotoUrl,
        },
        createdAt: new Date(),
        description: body.description || null,
        id: null,
        gtinEan: body.gtinEan,
        imageURL: `https://firebasestorage.googleapis.com/v0/b/mobyo-00001.appspot.com/o/gtin-ean%2F${body.gtinEan}.webp?alt=media`,
        measure: 'UN',
        utilizations: [],

        moderated: false,
        moderatedAt: null,
        moderatedBy: null,
        name: body.name,
        rate: 5,
        rates: [],
        updatedAt: new Date(),
        version: '1.0.0',
    } as IGlobalsProduct;
}
