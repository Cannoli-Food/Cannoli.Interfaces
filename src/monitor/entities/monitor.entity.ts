import { IMonitor } from '../interfaces/i-monitor';

export class MonitorEntity implements IMonitor {
  // #region Properties (9)

  id: string = '';
  companyIds: string[] = [];
  total: number = 0;
  createdAt: Date = new Date();
  appId: string = '';
  appName: string = '';

  // #endregion Properties (9)

  // #region Constructors (1)

  constructor(data?: Partial<MonitorEntity>) {
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
