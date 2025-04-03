import { IEntity } from "./i-entity";

export interface Observation extends IEntity {
    name: string;
    categories: string[];
}
