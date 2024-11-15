import { IDeveloperAppCredentials } from '../interfaces';

export class DeveloperAppCredentialsEntity implements IDeveloperAppCredentials {
  // #region Properties (2)

  public clientKey: string = '';
  public clientSecret: string = '';

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<DeveloperAppCredentialsEntity>) {
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
