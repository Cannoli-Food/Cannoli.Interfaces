export interface IPayioSubscriptionItem {
  // #region Properties (5)

  appId: string | null;
  description: string;
  quantity: number;
  recurrent: boolean;
  voucherKey: string | null;
  totalPrice: number;
  unitPrice: number;
  createdAt: Date;
  id: string;
  index: number;
  updatedAt: Date;


  // #endregion Properties (5)
}
