import { ICoords } from '../../../general';
import { MottuOrderEntity } from '../../../mottu';
import { EOrderDeliveredBy } from '../enum/order-delivered-by.enum';
import { EOrderV3DeliveryMode } from '../enum/order-v3-delivery-mode.enum';
import { IOrderDeliveryAddressV3 } from './i-order-delivery-address-v3';

export interface IOrderDeliveryV3 {
  // #region Properties (8)

  deliveredBy: EOrderDeliveredBy;
  deliveryAddress: IOrderDeliveryAddressV3;
  deliveryDateTime: string;
  minimumCartValue: number;
  mode: EOrderV3DeliveryMode;
  mottu?: MottuOrderEntity;
  preferential: boolean;
  preparationTime: number;
  id?: string;
  coords?: ICoords | null;
  pickupCode?: string;
  pickupCodeVerified?: boolean;

  // #endregion Properties (8)
}

// #endregion interfacees (1)
