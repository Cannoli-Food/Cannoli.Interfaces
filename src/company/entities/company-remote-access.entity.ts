import { ICompanyRemoteAccess } from '../interfaces/i-company-remote-access';

export class CompanyRemoteAccessEntity implements ICompanyRemoteAccess {
  // #region Properties (5)

  public active: boolean = true;
  public code: string = '';
  public domain: string = '';
  public remoteIp: string = '';
  public updatedAt: Date = new Date();

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<CompanyRemoteAccessEntity>) {
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
