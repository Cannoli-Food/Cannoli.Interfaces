import { IFeature } from '../../feature';
import { ISubscriptionBase } from '../../subscription-base/interfaces/i-subscription-base';
import { ISubscriptionCompanyProfile } from './i-subscription-profile';

export interface ISubscriptionCompany extends ISubscriptionBase {
  // #region Properties (7)

  features: IFeature[];
  partnerId: string | null;

  profile: ISubscriptionCompanyProfile;

  // #endregion Properties (7)
}
