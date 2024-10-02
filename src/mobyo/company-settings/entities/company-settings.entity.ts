import { ICompanySettings } from '../interfaces';
import { CompanySettingsWaServerEntity } from './wa-server.entity';

export class CompanySettingsEntity implements ICompanySettings {
  // #region Properties (4)

  public createdAt: Date = new Date();
  public id: string = '';
  public updatedAt: Date = new Date();
  public waServer: CompanySettingsWaServerEntity = new CompanySettingsWaServerEntity();

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: ICompanySettings) {
    if (data) {
      this.id = data.id || '';
      this.createdAt = data.createdAt || new Date();
      this.updatedAt = data.updatedAt || new Date();
      this.waServer = new CompanySettingsWaServerEntity(data.waServer);
    }
  }

  // #endregion Constructors (1)
}
