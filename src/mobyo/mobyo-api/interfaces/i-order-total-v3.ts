

export class IOrderTotalV3 {
    // #region Properties (5)

    //Total amount represented by the price of the items on the order
    
    public additionalFees: number;
    
    public benefits: number;
    //Consolidated discounts applied to the order
    
    public deliveryFee: number;
    //Total delivery fee
    
    public orderAmount: number;
    //Final amount, equivalent to subTotal + deliveryFee - benefits
    
    public subTotal: number;

    // #endregion Properties (5)
}

export const factoryOrderTotalV3 = (deliveryFee: number = 0): IOrderTotalV3 => {
    const data = {
        benefits: 0, //Consolidated discounts applied to the order
        deliveryFee, //Total delivery fee
        orderAmount: 0, //Final amount, equivalent to subTotal + deliveryFee - benefits
        subTotal: 0, //Total amount represented by the price of the items on the order
        additionalFees: 0,
    } as IOrderTotalV3;
    data.orderAmount = (data.subTotal + data.deliveryFee + data.additionalFees) - data.benefits;
    return data;
};