import { EIntervalType } from '../../../general';
import { IPayioFeature } from '../../features';

export interface IPayioPlan {
  // #region Properties (10)

  createdAt: Date;
  features: IPayioFeature[];
  id: string;
  identifier: string;
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
