import { ICompanyCustomData } from '../interfaces/i-company-custom-data';

export class CompanyCustomDataEntity implements ICompanyCustomData {
  // #region Properties (2)

  public code: string = '';
  public remoteIp: string = '';

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<CompanyCustomDataEntity>) {
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
