import { IFee } from '../../transaction';
import { IGlobalSettingTaxes } from '../interfaces';

export class GlobalSettingTaxesEntity implements IGlobalSettingTaxes {
  // #region Properties (1)

public id: string = '';
public fees: IFee[] = [];

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(data?: Partial<GlobalSettingTaxesEntity>) {
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
