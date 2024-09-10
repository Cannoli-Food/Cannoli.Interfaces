export interface IIuguCustomerPaymentMethod {
    // #region Properties (5)

    customerId: string;
    data: {
        bin: string,
        brand: string,
        displayNumber: string,
        firstDigits: string,
        holderName: string,
        lastDigits: string,
        maskedNumber: string,
        month: number,
        year: number;
    };
    description: string,
    id: string,
    itemType: string,

    // #endregion Properties (5)
}
