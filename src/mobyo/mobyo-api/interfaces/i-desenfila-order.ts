import { IOrderItemV3 } from '../../order-v3/interfaces-v3/i-order-item-v3';
import { IOrderV3 } from '../../order-v3/interfaces-v3/i-order-v3';
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

export const factoryDesenfilaOrder = (order: IOrderV3, paymentId: string, companyName: string, checkoutOnline: boolean) => {
    const ret = {
        refId: order.id,
        pos: `${order.displayId}`,
        from: 'MOBYO',
        discount: order.total.benefits || 0,
        invite: 0,
        checkoutOnline,
        consumation: 0,
        callback: `https://us-central1-mobyo-00001.cloudfunctions.net/callbackDesenfilaPayment?orderId=${order.id}&companyId=${order.companyId}&containerId=${order.containerId}&paymentId=${paymentId}`,
        diffConsumation: 0,
        paidValue: 0,
        addition: order.total.additionalFees || 0,
        deliveryFee: order.total.deliveryFee || 0,
        amount: order.total.orderAmount,
        netAmount: order.total.subTotal,
        merchantName: companyName || 'N/A',
        items: factoryDesenfilaOrderItem(order.items),
    } as IDesenfilaOrder;
    return ret;
};

export const factoryDesenfilaOrderItem = (items: IOrderItemV3[]): IDesenfilaOrderItem[] => {
    const ref = [] as IDesenfilaOrderItem[];
    items.forEach((item, index) => {
        ref.push({
            id: item.id,
            quantity: item.quantity || 1,
            discount: 0,
            addition: 0,
            amount: item.totalPrice,
            netAmount: item.price,
            unitPrice: item.unitPrice,
            code: item.externalCode || item.ean || item.id,
            name: item.name,
            unit: item.unit || 'UN',
        } as IDesenfilaOrderItem);
    });
    return ref;
};
