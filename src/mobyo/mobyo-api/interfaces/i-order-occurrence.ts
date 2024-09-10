import { OrderOccurrenceTypeEnum } from "../dto/order-occurrence-type.dto";

export interface IOrderOccurrence {
    type: OrderOccurrenceTypeEnum;
    message: string;
    createdAt: Date;
    readed: boolean;
}
