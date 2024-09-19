import { ICompany } from "./i-company";
import { IEntity } from "./i-entity";

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
