import { EIFoodPaymentMethodType as EIFoodOrderPaymentMethodType } from "../enums/ifood-payment-method-type.enum";
import { IIFoodPaymentMethodCard as IIFoodOrderPaymentMethodCard } from "./i-ifood-order-payment-method-card";
import { IIFoodPaymentMethodCash as IIFoodOrderPaymentMethodCash } from "./i-ifood-order-payment-method-cash";
import { IIFoodPaymentMethodTransaction as IIFoodOrderPaymentMethodTransaction } from "./i-ifood-order-payment-method-transaction";
import { IIFoodOrderPaymentMethodWallet } from "./i-ifood-order-payment-method-wallet";

export interface IIFoodOrderPaymentMethod {
  wallet?: IIFoodOrderPaymentMethodWallet;
  /**
   * Ex.: CREDIT, DEBIT, CASH
   */
  method: string;
  prepaid: boolean;
  /**
   * ISO 4217 currency code
   */
  currency: string;
  type: EIFoodOrderPaymentMethodType;
  value: number;
  cash?: IIFoodOrderPaymentMethodCash;
  card?: IIFoodOrderPaymentMethodCard;
  transaction?: IIFoodOrderPaymentMethodTransaction;
}
