import { EIFoodOrderIndoorMode } from "../enums/ifood-order-indoor-mode.enum";

export interface IIFoodOrderIndoor {
  mode: EIFoodOrderIndoorMode;
  deliveryDateTime: string | Date;
  /**
   * if mode = TABLE
   */
  table?: string;
}
