import * as md5 from 'md5';
import { IEntity } from '../../../entities/i-entity';
import { CompanyInfo } from '../../../framework/decorators/company-info';
import { ICompany } from '../../companies/interfaces/i-company';

export interface IPartner extends IEntity {
    active: boolean;
    company: ICompany;
    companyId: string;
    containerId: string;
    createdAt: Date;
    name: string;
    pictureUrl: string;
    updatedAt: Date;
}

export function factoryPartner(companyInfo: CompanyInfo, company: ICompany) {
    const customerData = {
        active: true,
        company,
        companyId: companyInfo.companyId,
        containerId: companyInfo.containerId,
        createdAt: new Date(),
        name: company.name,
        pictureUrl:
            company.imageURL ||
            `https://www.gravatar.com/avatar/${md5(
                company.email || company.name || company.id,
            )}?d=wavatar`,
        updatedAt: new Date(),
    } as IPartner;
    return customerData;
}
