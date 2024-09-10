
import {
    factoryOrderDeliveryAddressV3,
    IOrderDeliveryAddressV3,
} from './i-order-delivery-address-v3';
import { OrderV3DeliveryModeEnum } from './order-v3-delivery-mode.enum';
import { OrderDeliveredByEnum } from './order-delivered-by.enum';
import { IsOptional } from 'class-validator';
import { IAddress, MottuOrderEntity } from 'cecon-interfaces';

// #region Classes (1)

export class IOrderDeliveryV3 {
    // #region Properties (8)

    
    public deliveredBy: OrderDeliveredByEnum;
    public deliveryAddress: IOrderDeliveryAddressV3;
    
    public deliveryDateTime: string;
    
    public minimumCartValue: number;
    public mode: OrderV3DeliveryModeEnum;
    
    
    public mottu: MottuOrderEntity;
    
    public preferential: boolean;
    
    public preparationTime: number;

    // #endregion Properties (8)
}

// #endregion Classes (1)

// #region Functions (1)

export function factoryOrderDeliveryV3(
    address: IAddress,
    deliveryDateTime: string,
    deliveredBy: OrderDeliveredByEnum,
    preparationTime: number,
    mottu: MottuOrderEntity,
): IOrderDeliveryV3 {
    return {
        mode: OrderV3DeliveryModeEnum.default,
        deliveredBy,
        deliveryDateTime,
        preferential: false,
        preparationTime: preparationTime || 0,
        deliveryAddress: address
            ? factoryOrderDeliveryAddressV3(address)
            : null,
        minimumCartValue: address?.deliveryArea?.minimumOrderValue || 1,
        mottu,
    } as IOrderDeliveryV3;
}

// #endregion Functions (1)
