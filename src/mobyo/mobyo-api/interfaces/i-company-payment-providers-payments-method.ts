
import { UpdateCompanyPaymentProviderPaymentMethodDto } from '../dto/update-company-payment-providers-payments-method.dto';
import { ICompanyPaymentProviderPaymentMethodData } from './i-company-payment-providers-payments-method-data';

export class ICompanyPaymentProviderPaymentMethod {
    // #region Properties (5)

    
    public data: ICompanyPaymentProviderPaymentMethodData;
    
    public customerId: string;
    
    public description: string;
    
    public id: string;
    
    public itemType: string;

    // #endregion Properties (5)

    // #region Constructors (1)

    constructor(obj: UpdateCompanyPaymentProviderPaymentMethodDto) {
        this.customerId = obj.customerId || '';
        this.description = obj.description || '';
        this.id = obj.id || '';
        this.itemType = obj.itemType || '';
        this.data = new ICompanyPaymentProviderPaymentMethodData(obj.data);
    }

    // #endregion Constructors (1)
}
