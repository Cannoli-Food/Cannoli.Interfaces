import { EOperator } from '../enums/operators.enum';

export interface IFirebaseQuery {
  field: string;
  operator: EOperator;
  value: string | number | Array<string | number | boolean> | boolean | Date;
}
