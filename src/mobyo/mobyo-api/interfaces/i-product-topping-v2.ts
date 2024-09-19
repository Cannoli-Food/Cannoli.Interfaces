import { EProductSkillV2 } from "../enum/product-skill-v2.enum";

export interface IProductToppingV2 {
    active: boolean;
    code: string;
    companyId?: string;
    containerId: string;
    createdAt: Date;
    id?: string;
    measure: string;
    name: string;
    price: number;
    skill: EProductSkillV2;
    tags?: Array<string>;
    updatedAt?: Date;
    updatedBy?: string;
    version: string;
}