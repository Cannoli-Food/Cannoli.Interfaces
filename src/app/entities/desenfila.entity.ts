import { IDesenfila } from '../interfaces';
import { DesenfilaConfigEntity } from './desenfila-config.entity';
import { DesenfilaTokenEntity } from './desenfila-token.entity';

export class DesenfilaEntity implements IDesenfila {
  // #region Properties (4)

  public config: DesenfilaConfigEntity | null = null;
  public containerId: string = '';
  public merchantId: string = '';
  public token: DesenfilaTokenEntity | null = null;

  // #endregion Properties (4)

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
