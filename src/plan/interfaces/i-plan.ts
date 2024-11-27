import { EIntervalType } from '../../general/enums';
import { IPayioFeature } from '../../payio';
import { EPlanIdentifier } from '../enums';

export interface IPlan {
  // #region Properties (10)

  createdAt: Date;
  features: IPayioFeature[];
  id: string;
  identifier: EPlanIdentifier;
  index: number;
  interval: number;
  intervalType: EIntervalType;
  tags: string[];
  name: string;
  trialDays: number;
  price: number;
  updatedAt: Date;

  // #endregion Properties (10)
}
