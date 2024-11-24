export interface IPayioSubscriptionItem {
  // #region Properties (5)

  description: string;
  quantity: number;
  recurrent: boolean;
  voucherKey: string | null;
  totalPrice: number;
  unitPrice: number;

  // #endregion Properties (5)
}
