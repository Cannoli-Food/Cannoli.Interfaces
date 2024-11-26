import { INatiV2ValidateCode } from '../interfaces/i-validate-code';

export class NatiV2ValidateCodeEntity implements INatiV2ValidateCode {
  // #region Properties (3)

  public updatedAt: number = 0;
  public verified: boolean = false;
  public verifiedAt: Date = new Date();

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<NatiV2ValidateCodeEntity>) {
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
