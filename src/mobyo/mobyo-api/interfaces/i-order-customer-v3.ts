
import * as md5 from 'md5';
import { v4 as uuid } from 'uuid';
import { SetOrderCustomCustomerDto } from '../dto/set-order-custom-customer.dto';
import { ICustomerMobyo } from 'cecon-interfaces';

// #region Classes (2)

export class IOrdersCustomerPhone {
    // #region Properties (4)

    
    public description: String;
    
    public localizer: String;
    
    public localizerExpiration: String;
    
    public number: String;

    // #endregion Properties (4)
}

export class IOrderCustomerV3 {
    // #region Properties (7)

    
    public documentNumber: string;
    
    public email: string;
    
    public id: string;
    
    public name: string;
    
    public ordersCountOnMerchant: number;
    
    public phone: IOrdersCustomerPhone;
    
    public picture: string;

    // #endregion Properties (7)
}

// #endregion Classes (2)

// #region Functions (3)

export function factoryOrderCustomCustomerV3(body: SetOrderCustomCustomerDto) {
    return {
        documentNumber: body?.doc || null,
        id: body.id || uuid().replace(/-/g, '').toUpperCase(),
        name: body?.name || 'ANÔNIMO',
        email: body?.email || null,
        ordersCountOnMerchant: 0,
        phone: {
            description: null,
            number: body?.phoneNumber || null,
            internationalCode: body?.internationalCode || '+55',
            localizer: null,
            localizerExpiration: null,
        },
        picture: `https://www.gravatar.com/avatar/${md5(
            body?.email || body.name || body.doc || body?.phoneNumber,
        )}?d=wavatar`,
    } as IOrderCustomerV3;
}

export function factoryOrderCustomerV3(customer: ICustomerMobyo) {
    customer.ordersCountOnRestaurant =
        parseInt(customer?.ordersCountOnRestaurant?.toString(), 10) || 0;
    return {
        documentNumber: customer?.doc || null,
        id: customer?.id,
        name: customer?.name,
        email: customer?.email || null,
        ordersCountOnMerchant: customer.ordersCountOnRestaurant + 1,
        phone: {
            description: null,
            number: customer?.phoneNumber || null,
            localizer: null,
            localizerExpiration: null,
        },
        picture:
            customer?.imageUrl ||
            `https://www.gravatar.com/avatar/${md5(
                customer.email || customer.name || customer.id,
            )}?d=wavatar`,
    } as IOrderCustomerV3;
}

export function factoryOrderEmptyCustomerV3() {
    return {
        documentNumber: '',
        id: null,
        name: '',
        email: '',
        ordersCountOnMerchant: 0,
        phone: {
            description: null,
            number: '',
            localizer: null,
            localizerExpiration: null,
        },
        picture: null,
    } as IOrderCustomerV3;
}

// #endregion Functions (3)
