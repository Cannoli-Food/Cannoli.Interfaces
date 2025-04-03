
import { ICompanyPaymentProviderPaymentMethodData } from './i-company-payment-providers-payments-method-data';

export interface ICompanyPaymentProviderPaymentMethod {
    // #region Properties (5)

    
    data: ICompanyPaymentProviderPaymentMethodData;
    
    customerId: string;
    
    description: string;
    
    id: string;
    
    itemType: string;

    // #endregion Properties (5)

    // #region Constructors (1)

    // #endregion Constructors (1)
}
