export interface IDesenfilaContainerOrderPayment {
  amount: number;
  code: string;
  couponAmount: number;
  createdAt: Date;
  customerId: string;
  dateAproved: Date;
  description: string;
  id: string;
  marketPlaceAmount: number;
  /**
   * @deprecated Use merchantName ao invés de merchant
   */
  merchant: string;
  merchantName: string;
  name: string;
  transaction: string;
  transactions: string[];
}
