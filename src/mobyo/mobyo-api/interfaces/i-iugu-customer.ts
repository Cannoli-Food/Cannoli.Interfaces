import { IIuguCustomerPaymentMethod } from './i-iugu-customer-payment-method';

export interface IIuguCustomer {
    id: string,
    email: string,
    name: string,
    notes: string,
    createdAt: Date,
    updatedAt: Date,
    ccEmails: string,
    cpfCnpj: string,
    zipCode: string,
    number: string,
    complement: string,
    phone: string,
    phonePrefix: string,
    defaultPaymentMethodId: string,
    proxyPaymentsFromCustomerId: string,
    city: string,
    state: string,
    district: string,
    street: string,
    customVariables: Array<any>,
    paymentMethods: IIuguCustomerPaymentMethod[];
}
