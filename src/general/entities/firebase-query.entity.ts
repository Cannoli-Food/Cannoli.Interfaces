import { EOperator } from '../enums';
import { IFirebaseQuery } from '../interfaces';

export class FirebaseQueryEntity implements IFirebaseQuery {
  // #region Properties (3)

  public field: string = '';
  public operator: EOperator = EOperator.EQUAL;
  public value: string | number | boolean | (string | number | boolean)[] | Date | null = null;

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(field: string, operator: EOperator, value: string | number | boolean | (string | number | boolean)[] | Date | null) {
    this.field = field;
    this.operator = operator;
    this.value = value;
  }

  // #endregion Constructors (1)
}
