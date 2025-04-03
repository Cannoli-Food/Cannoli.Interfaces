import { EOrderOccurrenceType } from '../enum/order-occurrence-type.enum';

export interface IOrderOccurrence {
  type: EOrderOccurrenceType;
  message: string;
  createdAt: Date;
  readed: boolean;
}
