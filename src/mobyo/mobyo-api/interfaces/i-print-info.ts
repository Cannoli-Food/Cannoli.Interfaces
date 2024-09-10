import { IEntity } from './../../../entities/i-entity';
export interface IPrintInfo extends IEntity {    
    skill: 'IP' | 'SHARED' | 'MONITOR';
    path: string;
    columns: number;
    active: boolean;
}
