import { IMember } from '../../../member';
import { EPayuioDistributorProfile } from '../enums';

export interface IPayioMember extends IMember {
  // #region Properties (18)
  // Data em que a chave foi usada (se já foi ativada)
  profile: EPayuioDistributorProfile;
  // #endregion Properties (18)
  // Usuário ou sistema que gerou a chave
}
