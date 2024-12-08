import { EIndoorMode } from '../enums';

export interface IOrderIndoor {
  // #region Properties (4)

  deliveryDateTime: Date;

  mode: EIndoorMode;

  preferential: boolean;

  table: string;

  tab: string;

  // #endregion Properties (4)
}
