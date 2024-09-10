import { IEntity } from '../../../entities/i-entity';

export interface ProductLinkInput extends IEntity {
    quantity: number;
    cost: number;
    inputId: string;
    inputName: string;
    inputMesure: string;
    inputCost: number;
    percent: number;
}
