import { IIFoodOrderPaymentMethod } from "./i-ifood-order-payment-method";

export interface IIFoodOrderPayment {
	methods: IIFoodOrderPaymentMethod[];
	pending: number;
	prepaid: number;
}