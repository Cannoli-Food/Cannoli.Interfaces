import { IEntity } from '../../../entities/i-entity';

export interface Observation extends IEntity {
    name: string;
    categories: string[];
}
