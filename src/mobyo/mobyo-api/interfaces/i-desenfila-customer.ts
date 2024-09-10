import { IDesenfilaCustomerIdentification } from './i-desenfila-customer-identification';
import { IDesenfilaCustomerPhone } from './i-desenfila-customer-phone';

export interface IDesenfilaCustomer {
    // #region Properties (7)

    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: IDesenfilaCustomerPhone;
    identification: IDesenfilaCustomerIdentification;

    // #endregion Properties (7)
}
