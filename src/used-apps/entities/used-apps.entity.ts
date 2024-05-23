import { IUsedApps } from '../interfaces/i-used-apps';

export class UsedAppsEntity implements IUsedApps {
  // #region Properties (9)

  id: string = '';
  companyIds: string[] = [];
  total: number = 0;
  createdAt: Date = new Date();
  appId: string = '';
  appName: string = '';

  // #endregion Properties (9)

  // #region Constructors (1)

  constructor(data?: Partial<UsedAppsEntity>) {
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
