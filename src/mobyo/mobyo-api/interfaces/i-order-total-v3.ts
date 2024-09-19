export interface IOrderTotalV3 {
  // #region Properties (5)

  //Total amount represented by the price of the items on the order

  additionalFees: number;

  benefits: number;
  //Consolidated discounts applied to the order

  deliveryFee: number;
  //Total delivery fee

  orderAmount: number;
  //Final amount, equivalent to subTotal + deliveryFee - benefits

  subTotal: number;

  // #endregion Properties (5)
}
