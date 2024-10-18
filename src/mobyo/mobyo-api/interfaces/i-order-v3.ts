import { EOrderExtraInfo, IOrderBenefits } from '../../../order';
import { EOrderStatus } from '../../../order/enums/order-status.enum';
import { EEngineType } from '../enum/engine-type.enum';
import { EOrderV3SalesChannel } from '../enum/order-v3-sales-channel.enum';
import { EOrderV3Timing } from '../enum/order-v3-timing.enum';
import { EOrderV3Type } from '../enum/order-v3-type.enum';
import { IOrderActionV3 } from './i-order-action-v3';
import { IOrderCancellationV3 } from './i-order-cancellation-v3';
import { IOrderCustomerV3 } from './i-order-customer-v3';
import { IOrderDelivererV3 } from './i-order-deliverer-v3';
import { IOrderDeliveryV3 } from './i-order-delivery-v3';
import { IOrderDesenfilaV3 } from './i-order-desenfila-v3';
import { IOrderIndoorV3 } from './i-order-indoor-v3';
import { IOrderItemV3 } from './i-order-item-v3';
import { IOrderMerchantV3 } from './i-order-merchant-v3';
import { IOrderOccurrence } from './i-order-occurrence';
import { IOrderPaymentV3 } from './i-order-payment-v3';
import { IOrderTakeoutV3 } from './i-order-takeout-v3';
import { IOrderTotalV3 } from './i-order-total-v3';

export interface IOrderV3 {
  // #region Properties (39)

  actions: IOrderActionV3[];
  benefits: IOrderBenefits[];
  cancellation: IOrderCancellationV3;

  companyId: string;

  containerId: string;

  createdAt: Date;
  customer: IOrderCustomerV3;
  deliverer: IOrderDelivererV3;
  delivery: IOrderDeliveryV3;
  desenfila?: IOrderDesenfilaV3;

  displayId: string;

  engineId: string;

  engineName: string;

  engineType: EEngineType;

  extraInfo: EOrderExtraInfo | string | null;

  id: string;
  indoor: IOrderIndoorV3;

  integrated: boolean;

  integrationId: number;

  isTest: boolean;
  items: IOrderItemV3[];
  merchant: IOrderMerchantV3;
  metadata?: any;
  orderTiming: EOrderV3Timing;
  orderType: EOrderV3Type;
  payments: IOrderPaymentV3;

  preparationTime: number;

  reference: string;

  salesChannel: EOrderV3SalesChannel;

  scheduledAt: Date;
  status: EOrderStatus;

  takeOutTimeInSeconds: number;
  /**
   * Additional information for indoor orders (if cartType = INDOOR)
   */
  takeout: IOrderTakeoutV3;
  total: IOrderTotalV3;

  updatedAt: Date;

  version: string;

  occurrences: IOrderOccurrence[];

  callbacks?: string[];

  // #endregion Properties (39)
}
