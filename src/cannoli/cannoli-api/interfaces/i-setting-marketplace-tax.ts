export interface ISettingMarketplaceTax {
    bankSlip: {
        customer: number,
        marketplace: number,
        master: number,
        paymentProvider: number,
    },
    creditCard: {
        customer: number,
        marketplace: number,
        master: number,
        paymentProvider: number,
    },
    creditCard6x: {
        customer: number,
        marketplace: number,
        master: number,
        paymentProvider: number,
    },
    creditCard12x: {
        customer: number,
        marketplace: number,
        master: number,
        paymentProvider: number,
    },
    id: string;
    perOrder: {
        customer: number,
        marketplace: number,
        master: number,
        paymentProvider: number,
    },
    pix: {
        customer: number,
        marketplace: number,
        master: number,
        paymentProvider: number,
    },
    subscription: {
        customer: number,
        marketplace: number,
        master: number,
        paymentProvider: number,
    };
    createdAt: Date;
    updatedAt: Date;
}
