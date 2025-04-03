import { ICannoliInfo } from '../interfaces';

export class CannoliInfoEntity implements ICannoliInfo {
  // #region Properties (6)
  public companyId: string = '';
  public containerId: string = '';

  constructor(data?: Partial<CannoliInfoEntity>) {
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
