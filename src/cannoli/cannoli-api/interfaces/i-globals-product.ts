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
