
import { IOrderPaymentMethodV3 } from "./i-order-payment-method-v3";

export class IOrderPaymentV3 {
    methods: IOrderPaymentMethodV3[];
    
    pending: number;
    
    prepaid: number;
}
export const factoryOrderPaymentV3 = (): IOrderPaymentV3 => {
    return {
        methods: [],
        pending: 0,
        prepaid: 0,
    } as IOrderPaymentV3;
}

