
import { IOrderPaymentMethodV3 } from "./i-order-payment-method-v3";

export interface IOrderPaymentV3 {
    methods: IOrderPaymentMethodV3[];
    
    pending: number;
    
    prepaid: number;
}
