import { IDesenfilaConfig } from './i-desenfila-config';
import { IDesenfilaToken } from './i-desenfila-token';

export interface IDesenfila {
  // #region Properties (3)

  containerId: string;
  merchantId: string;
  token: IDesenfilaToken | null;
  config: IDesenfilaConfig | null;

  // #endregion Properties (3)
}
