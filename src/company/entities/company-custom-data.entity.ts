import { ICompanyCustomData } from '../interfaces/i-company-custom-data';
import { CompanyRemoteAccessEntity } from './company-remote-access.entity';

export class CompanyCustomDataEntity implements ICompanyCustomData {
  // #region Properties (1)

  public remoteAccess: CompanyRemoteAccessEntity = new CompanyRemoteAccessEntity();

  // #endregion Properties (1)

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
