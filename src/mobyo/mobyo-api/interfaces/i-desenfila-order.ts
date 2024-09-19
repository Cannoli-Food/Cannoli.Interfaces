import { IDesenfilaOrderItem } from './i-desenfila-order-item';

export interface IDesenfilaOrder {
    // #region Properties (15)

    addition: number;
    amount: number;
    /**
     * Caso verdadeiro indica para ser criada a preference do Mercado Pago
     * Caso falso indica para ser criado um POS Mercado Pago
     */
    checkoutOnline: boolean;
    callback?: string;
    consumation: number;
    deliveryFee: number;
    diffConsumation: number;
    discount: number;
    from: 'MOBYO';
    invite: number;
    items: IDesenfilaOrderItem[];
    merchantName: string;
    netAmount: number;
    paidValue: number;
    pos: number | string;
    refId: string;

    // #endregion Properties (15)
}