import { EPlanFeatureType } from '../enums/plans-feature-type.enum';

export interface IPlanFeature {
  // #region Properties (10)

  appId: string;
  createdAt: Date;
  featureType: EPlanFeatureType;
  id: string;
  index: number;
  name: string;
  planId: string;
  price: number;
  quantity: number;
  updatedAt: Date;

  // #endregion Properties (10)
}
