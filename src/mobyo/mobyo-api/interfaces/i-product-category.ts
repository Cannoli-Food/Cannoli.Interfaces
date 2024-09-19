import { IEntity } from './i-entity';

export interface IProductCategory extends IEntity {
    name: string;
    containerId: string;
    companyId: string;
}
