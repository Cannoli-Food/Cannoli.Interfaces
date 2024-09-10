
import { v4 } from 'uuid';
import { SetOrderPaymentMethodV3Dto } from '../dto/set-order-payment-method-v3.dto';
import { OrderPaymentMethodEnum } from './order-payment-method.enum';
export class IOrderPaymentPix {
    // #region Properties (2)

    
    public pixKey: string;
    
    public urlQrImage: string;

    // #endregion Properties (2)
}
export class IOrderPaymentWallet {
    // #region Properties (1)

    
    public name: string;

    // #endregion Properties (1)
}
export class IOrderPaymentCard {
    // #region Properties (1)

    
    public brand: string;

    // #endregion Properties (1)
}
export class IOrderPaymentCash {
    // #region Properties (1)

    
    public changeFor: Number;

    // #endregion Properties (1)
}
export class IOrderPaymentMethodV3 {
    // #region Properties (12)

    public card: IOrderPaymentCard;
    public cash: IOrderPaymentCash;
    
    public code: string;
    
    public currency: 'BRL';
    
    public id: string;
    public method: OrderPaymentMethodEnum;
    pix?: IOrderPaymentPix;
    
    public prepaid: boolean;
    
    transaction?: any;
    
    public type: 'ONLINE' | 'OFFLINE';
    
    public value: number;
    public wallet: IOrderPaymentWallet;

    // #endregion Properties (12)
}
export function factoryOrderPaymentMethodV3(
    body: SetOrderPaymentMethodV3Dto,
): IOrderPaymentMethodV3 {
    const res = {
        id: v4().replace(/\-/g, '').toUpperCase(),
        cash: { changeFor: body.changeFor || 0 },
        paymentId: body.paymentId || getMethodName(body.method),
        card: { brand: body.brand || null },
        code: body.code || null,
        currency: 'BRL',
        method: body.method || null,
        pix: {
            pixKey: null,
            urlQrImage: null,
        },
        prepaid: false,
        type: body.type || 'OFFLINE',
        value: body.value || 0,
        wallet: { name: body.wallet || null },
    } as IOrderPaymentMethodV3;
    if (body.method === 'CREDIT' || body.method === 'DEBIT') {
        delete res.cash;
        delete res.wallet;
        delete res.pix;
    }
    if (body.method === 'WALLET') {
        delete res.card;
        delete res.cash;
    }
    if (body.method === 'CASH') {
        delete res.card;
        delete res.wallet;
        delete res.pix;
    }
    return res;
}

export const getMethodName = (method: OrderPaymentMethodEnum): string => {
    switch (method) {
        case 'CREDIT':
            return 'Cartão de Crédito';
        case 'DEBIT':
            return 'Cartão de Débito';
        case 'PIX':
            return 'PIX';
        case 'WALLET':
            return 'Carteira Digital';
        case 'CASH':
            return 'Dinheiro';
        default:
            return 'Não informado';
    }
}





