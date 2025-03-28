import { EIFoodEventCodes } from "../enums/ifood-event-codes.enum";

export interface IIFoodEvent {
  id: string;
  code: EIFoodEventCodes | string;
  fullCode: string;
  orderId: string;
  merchantId: string;
  createdA: string | Date;
  /**
   * Canal de vendas pelo qual o pedido entra na plataforma 
   * (novos canais podem ser adicionados). Possíveis valores: 
   * IFOOD, DIGITAL_CATALOG, POS, ECONOMIC, TOTEM, IFOOD_SHOP, 
   * IFOOD_APP, IFOOD_SITE, WAITER, PDV, QR_CODE, IFOOD_SHOP_APP, 
   * IFOOD_SHOP_SITE, GROCERY_WHITELABEL_SITE
   */
  salesChannel: string;
  metadata: any;
}
