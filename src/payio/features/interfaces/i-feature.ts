import { EPayuioFeatureType } from '../enum';

export interface IPayioFeature {
  // #region Properties (12)

  appId: string | null;
  createdAt: Date;
  description: string;
  id: string;
  index: number;
  quantity: number;
  recurrent: boolean;
  totalPrice: number;
  type: EPayuioFeatureType;
  unitPrice: number;
  updatedAt: Date;
  voucherKey: string | null;

  // #endregion Properties (12)
}
