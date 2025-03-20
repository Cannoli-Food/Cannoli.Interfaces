import { IMobyoInfo } from '../interfaces';

export class MobyoInfoEntity implements IMobyoInfo {
  // #region Properties (6)
  public companyId: string = '';
  public containerId: string = '';

  constructor(data?: Partial<MobyoInfoEntity>) {
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
