import { IPaymentMethod } from '../../payments/interface/i-payment-method';

export interface IEnginePayment {
    id: string;
    method: 'ondelivery' | 'app';
    name: string;
    type: 'default' | 'credit' | 'debit' | 'wallet' | 'voucher';
}

export function factoryEnginePayment(payment: IPaymentMethod) {
    return {
        id: payment.id,
        name: payment.name,
        method: payment.method,
        type: payment.type,
    } as IEnginePayment;
}
