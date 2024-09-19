import { IEntity } from './i-entity';
export interface IToken extends IEntity {
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
