import { IEntity } from '../../entities/i-entity';
import { CompanyInfo } from '../../framework/decorators/company-info';
import { factoryId } from '../../shared/functions/factory-id.function';
export class IToken implements IEntity {
    id: string;
    active: boolean;
    companyId: string;
    containerId: string;
    containerName: string;
    companyName: string;
    createdAt: Date | any;
    createdBy: string;
    updatedAt: Date | any;
    lastAccess: Date | any;
}

export function factoryToken(companyInfo: CompanyInfo) {
    return {
        id: factoryId(),
        active: true,
        companyId: companyInfo.companyId,
        containerId: companyInfo.containerId,
        containerName: companyInfo.containerName,
        companyName: companyInfo.companyName,
        createdAt: new Date().getTime(),
        createdBy: companyInfo.memberEmail,
        updatedAt: new Date().getTime(),
        lastAccess: null,
    } as IToken;
}
