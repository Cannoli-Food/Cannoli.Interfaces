import { BadRequestException } from '@nestjs/common';

import * as _ from 'lodash';
import { v4 as uuid } from 'uuid';
import { ICompany } from '../../companies/interfaces/i-company';
import { EngineTypesEnum } from '../../engines/interfaces/engine-type.enum';
import { IOrderActionV3 } from './i-order-action-v3';
import { IOrderBenefitsV3 } from './i-order-benefits-v3';
import { IOrderCancellationV3 } from './i-order-cancellation-v3';
import {
    factoryOrderEmptyCustomerV3,
    IOrderCustomerV3,
} from './i-order-customer-v3';
import { IOrderDelivererV3 } from './i-order-deliverer-v3';
import {
    factoryOrderDeliveryV3,
    IOrderDeliveryV3,
} from './i-order-delivery-v3';
import { IOrderDesenfilaV3 } from './i-order-desenfila-v3';
import { factoryCartIndoorV2, IOrderIndoorV3 } from './i-order-indoor-v3';
import { IOrderItemV3 } from './i-order-item-v3';
import { IOrderMerchantV3 } from './i-order-merchant-v3';
import { IOrderOccurrence } from './i-order-occurrence';
import { factoryOrderPaymentV3, IOrderPaymentV3 } from './i-order-payment-v3';
import { factoryOrderTakeoutV3, IOrderTakeoutV3 } from './i-order-takeout-v3';
import { factoryOrderTotalV3, IOrderTotalV3 } from './i-order-total-v3';
import { OrderDeliveredByEnum } from './order-delivered-by.enum';
import { OrderV3DeliveryModeEnum } from './order-v3-delivery-mode.enum';
import { OrderV3SalesChannelEnum } from './order-v3-sales-channel.enum';
import { OrderStatusEnum } from './order-v3-status.enum';
import { OrderV3TimingEnum } from './order-v3-timing.enum';
import { OrderV3TypeEnum } from './order-v3-type.enum';

export class IOrderV3 {
    // #region Properties (39)

    public actions: IOrderActionV3[];
    public benefits: IOrderBenefitsV3[];
    public cancellation: IOrderCancellationV3;
    
    public companyId: string;
    
    public containerId: string;
    
    public createdAt: Date;
    public customer: IOrderCustomerV3;
    public deliverer: IOrderDelivererV3;
    public delivery: IOrderDeliveryV3;
    public desenfila?: IOrderDesenfilaV3;
    
    public displayId: string;
    
    public engineId: string;
    
    public engineName: string;
    
    public engineType: EngineTypesEnum;
    
    public extraInfo: string;
    
    public id: string;
    public indoor: IOrderIndoorV3;
    
    public integrated: boolean;
    
    public integrationId: number;
    
    public isTest: boolean;
    public items: IOrderItemV3[];
    public merchant: IOrderMerchantV3;
    public metadata?: any;
    public orderTiming: OrderV3TimingEnum;
    public orderType: OrderV3TypeEnum;
    public payments: IOrderPaymentV3;
    
    public preparationTime: number;
    
    public reference: string;
    
    public salesChannel: OrderV3SalesChannelEnum;
    
    public scheduledAt: Date;
    public status: OrderStatusEnum;
    
    public takeOutTimeInSeconds: number;
    /**
     * Additional information for indoor orders (if cartType = INDOOR)
     */
    public takeout: IOrderTakeoutV3;
    public total: IOrderTotalV3;
    
    public updatedAt: Date;
    
    public version: string;
    
    public occurrences: IOrderOccurrence[];
    
    public callbacks?: string[];

    // #endregion Properties (39)
}

export const factoryEmptyOrderDeliveryV3 = (company: ICompany): IOrderV3 => {
    const data = factoryEmptyOrderV3();
    data.orderType = OrderV3TypeEnum.delivery;
    const deliveryFee = 0;
    data.total = factoryOrderTotalV3(0);
    const dateTime = new Date(
        new Date().getTime() + 0 * 60 * 1000,
    ).toISOString();
    data.delivery = factoryOrderDeliveryV3(
        null,
        dateTime || new Date().toISOString(),
        company.defaultDeliveredBy || OrderDeliveredByEnum.merchant,
        company.preparationTime,
        data.delivery?.mottu || null,
    );
    data.delivery.mode = OrderV3DeliveryModeEnum.default;
    return data;
};
export const factoryEmptyOrderIndoorV3 = (): IOrderV3 => {
    const data = factoryEmptyOrderV3();
    data.orderType = OrderV3TypeEnum.indoor;
    data.indoor = factoryCartIndoorV2(new Date());
    return data;
};
export const factoryEmptyOrderTakeoutV3 = (): IOrderV3 => {
    const data = factoryEmptyOrderV3();
    data.orderType = OrderV3TypeEnum.takeout;
    data.takeout = factoryOrderTakeoutV3(new Date().toISOString());
    return data;
};
export const factoryActionV3 = (): IOrderActionV3 => {
    return {
        status: OrderStatusEnum.PENDING,
        createdAt: new Date(),
        user: 'SYSTEM',
    };
};
export const factoryEmptyOrderV3 = (): IOrderV3 => {
    const reference = uuid().replace(/\-/g, '').toUpperCase();
    const data = {
        actions: [],
        benefits: [],
        companyId: null,
        cancellation: null,
        createdAt: new Date(),
        customer: factoryOrderEmptyCustomerV3(),
        extraInfo: null,
        delivery: null,
        displayId: Math.round(Math.random() * 100000).toString(),
        id: null,
        /**
         * Additional information for indoor orders (if cartType = INDOOR)
         */
        isTest: false,
        indoor: null,
        integrated: false,
        integrationId: null,
        items: [],
        merchant: null,
        orderTiming: 'IMMEDIATE',
        orderType: OrderV3TypeEnum.delivery,
        payments: factoryOrderPaymentV3(),
        preparationStartDateTime: new Date().toISOString(),
        reference,
        refId: reference, // Deprecated
        salesChannel: OrderV3SalesChannelEnum.mobyo,
        /**
         * Additional information for scheduled orders (if orderTiming = SCHEDULED)
         */
        scheduledAt: new Date().toISOString(),
        scheduled: false,
        status: OrderStatusEnum.PENDING,
        /**
         * Additional information for indoor orders (if cartType = TAKEOUT)
         */
        takeout: null,
        takeOutTimeInSeconds: 1800,
        total: factoryOrderTotalV3(0),
        version: '0.0.3',
        updatedAt: new Date(),
    } as any as IOrderV3;
    return recalcOrderV3(data);
};
export const checkOrderPayments = (order: IOrderV3): IOrderV3 => {
    /**
     * REMOVE OS PAGAMENTOS NÃO PAGOS E VERIFICA SE OS VALORES PAGOS SÃO MAIORES QUE O PEDIDO
     */
    if (order.payments && !order.payments.methods) {
        order.payments.methods = [];
    }
    order.payments.methods = order.payments.methods.filter((o) => o.prepaid);
    if (!order.payments.methods.length) {
        order.total.additionalFees = 0;
    }
    const paid = _.sumBy(order.payments.methods, (o) => o.value);
    if (paid > order.total.orderAmount) {
        throw new BadRequestException(
            '[F08F1CCE] O valor do pedido não pode ser menor que o valor já pago.',
        );
    }
    order.payments.prepaid = Math.round(paid * 100) / 100;
    order.payments.pending =
        Math.round((order.total.orderAmount - paid) * 100) / 100;
    return order;
};
export const recalcOrderV3 = (order: IOrderV3): IOrderV3 => {
    order.total.subTotal = 0;
    if (!order.items) {
        order.items = [];
    }
    if (order.items?.length > 0) {
        order.items.forEach((item) => {
            item.optionsPrice = _.sumBy(
                item.options,
                (subItem) => subItem.totalPrice,
            );
            item.price = item.unitPrice * item.quantity;
            item.totalPrice =
                (item.unitPrice + item.optionsPrice) * item.quantity;
        });
        order.total.subTotal = _.sumBy(order.items, (item) => item.totalPrice);
    }
    // ZERA DELIVERYFEE SE NÃO FOR DELIVERY
    if (order.orderType !== OrderV3TypeEnum.delivery) {
        order.total.deliveryFee = 0;
    }
    // SUBTRAI O VALOR DO DESC POR PELO TIPO DO TARGET
    order.total.benefits = 0;
    if (!order.benefits) {
        order.benefits = [];
    }
    const benCart = order.benefits.filter((o) => o.target === 'CART');
    const benDel = order.benefits.filter((o) => o.target === 'DELIVERY_FEE');
    const benMDel = order.benefits.filter((o) => o.target === 'MOBYO_ENTREGAS');
    if (order.orderType === OrderV3TypeEnum.delivery) {
        order.total.benefits += _.sumBy(benMDel, (o) => o.value);
        order.total.benefits += _.sumBy(benDel, (o) => o.value);
    }
    order.total.benefits += _.sumBy(benCart, (o) => o.value);

    // ZERA VALORES NEGATIVOS (PROFILAXIA)
    if (order.total.subTotal < 0) {
        order.total.subTotal = 0;
    }
    if (order.total.deliveryFee < 0) {
        order.total.deliveryFee = 0;
    }
    // SOMA O ORDERAMOUNT
    order.total.orderAmount =
        (order.total.subTotal || 0) +
        (order.total.deliveryFee || 0) +
        (order.total.additionalFees || 0) -
        (order.total.benefits || 0);

    // ARREDONDA TOTAIS
    order.total.orderAmount = Math.round(order.total.orderAmount * 100) / 100;
    order.total.subTotal = Math.round(order.total.subTotal * 100) / 100;
    if (order.payments) {
        // Sum all value of the methods prepaid
        order.payments.prepaid = _.sumBy(order.payments.methods, (o) => {
            o.value;
            return o.prepaid ? o.value : 0;
        });
        order.payments.prepaid = Math.round(order.payments.prepaid * 100) / 100;
        order.payments.pending =
            Math.round(
                (order.total.orderAmount - order.payments.prepaid) * 100,
            ) / 100;
    }
    order.updatedAt = new Date();
    return order;
};
