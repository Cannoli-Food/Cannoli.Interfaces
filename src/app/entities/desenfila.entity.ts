import { IDesenfila } from '../interfaces';
import { IDesenfilaToken } from '../interfaces/i-desenfila-token';

export class DesenfilaEntity implements IDesenfila {
  // #region Properties (5)

  public containerId: string = '';
  public merchantId: string = '';
  public token: IDesenfilaToken | null = null;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<DesenfilaEntity>) {
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
