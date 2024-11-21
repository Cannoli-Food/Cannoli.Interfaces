import { EOperator } from '../enums';
import { IFirebaseQuery } from '../interfaces';

export class FirebaseQueryEntity implements IFirebaseQuery {
  // #region Properties (3)

  public field: string = '';
  public operator: EOperator = EOperator.EQUAL;
  public value: string | number | boolean | (string | number | boolean)[] | Date | null = null;

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<FirebaseQueryEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
