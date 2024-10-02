import { ICompanySettingsWaServer } from './i-wa-server';

export interface ICompanySettings {
  // #region Properties (4)

  createdAt: Date;
  id: string;
  updatedAt: Date;
  waServer: ICompanySettingsWaServer;

  // #endregion Properties (4)
}
