import { IEntity } from "./i-entity";


export interface ProductCategory extends IEntity {
    name: string;
    containerId: string;
    companyId: string;
}
