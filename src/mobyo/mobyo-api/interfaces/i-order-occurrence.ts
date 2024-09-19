import { EOrderOccurrenceType } from "../enum/order-occurrence-type.dto";

export interface IOrderOccurrence {
    type: EOrderOccurrenceType;
    message: string;
    createdAt: Date;
    readed: boolean;
}
