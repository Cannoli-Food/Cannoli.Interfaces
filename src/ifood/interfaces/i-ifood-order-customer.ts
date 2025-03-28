import { IIFoodOrderCustomerPhone } from './i-ifood-order-customer-phone';

export interface IIFoodOrderCustomer {
  description?: string;
  phone?: IIFoodOrderCustomerPhone;
  documentNumber?: string;
  name: string;
  ordersCountOnMerchant: number;
  segmentation: string | 'Cliente Frequente' | 'Cliente';
}
