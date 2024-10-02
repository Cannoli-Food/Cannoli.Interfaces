import { ICompanySettingsWaServer } from '../interfaces';

export class CompanySettingsWaServerEntity implements ICompanySettingsWaServer {
  // #region Properties (4)

  public deliveryMenuUrl: string = '';
  public indoorMenuUrl: string = '';
  public instanceName: string = '';
  public serverId: string = '';

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: ICompanySettingsWaServer) {
    if (data) {
      this.serverId = data.serverId || '';
      this.instanceName = data.instanceName || '';
      this.deliveryMenuUrl = data.deliveryMenuUrl || '';
      this.indoorMenuUrl = data.indoorMenuUrl || '';
    }
  }

  // #endregion Constructors (1)
}
