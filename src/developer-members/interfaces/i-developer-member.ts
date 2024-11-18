import { IMember } from '../../member';

export interface IDeveloperMember extends IMember {
  // #region Properties (2)

  developerId: string;
  developerName: string;

  // #endregion Properties (2)
}
