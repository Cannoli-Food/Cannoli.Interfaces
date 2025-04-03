import { EMemberRules } from '../../../member';
import { IEntity } from './i-entity';

export interface IMember extends IEntity {
  // #region Properties (8)

  companyName: string;
  containerName: string;
  email: string;
  name: string;
  phone: string;
  internationalCode: string;
  phoneConfirmed: boolean;
  photoURL: string;
  rule: EMemberRules;
  user?: any;
  userId: string;  // #endregion Properties (8)
}
