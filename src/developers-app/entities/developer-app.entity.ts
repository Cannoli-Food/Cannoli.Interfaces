import { DeveloperAppStatusEnum } from '../enums';
import { IDeveloperApp } from '../interfaces';
import { DeveloperAppCredentialsEntity } from './developer-app-credentials.entity';

export class DeveloperAppEntity implements IDeveloperApp {
  // #region Properties (16)

  public credentials: DeveloperAppCredentialsEntity = new DeveloperAppCredentialsEntity();
  public description: string | null = null;
  public developerId: string = '';
  public developerName: string = '';
  public developerSlug: string = '';
  public homePageUrl: string | null = null;
  public homologatedAt: Date | null = null;
  public homologatedScopes: string[] = [];
  public id: string = '';
  public imageUrl: string | null = null;
  public logoUrl: string | null = null;
  public name: string = '';
  /**
   * Reference para um appId external, como por exemplo o appId do NatiV2
   */
  public reference: string | null = null;
  public slug: string = '';
  public softwareHouseName: string = '';
  public status: DeveloperAppStatusEnum = DeveloperAppStatusEnum.PENDING;

  // #endregion Properties (16)

  // #region Constructors (1)

  constructor(data?: Partial<DeveloperAppEntity>) {
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
