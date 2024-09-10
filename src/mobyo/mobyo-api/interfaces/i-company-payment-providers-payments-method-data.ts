
import { UpdateCompanyPaymentProviderPaymentMethodDataDto } from '../dto/update-company-payment-providers-payments-method-data.dto';

export class ICompanyPaymentProviderPaymentMethodData {
    // #region Properties (9)

    
    public bin: string;
    

    public brand: string;
    
    public displayNumber: string;
    
    public firstDigits: string;
    
    public holderName: string;
    
    public lastDigits: string;
    
    public maskedNumber: string;
    
    public month: number;
    
    public year: number;

    // #endregion Properties (9)

    // #region Constructors (1)

    constructor(obj: UpdateCompanyPaymentProviderPaymentMethodDataDto) {
        this.bin = obj.bin || '';
        this.brand = obj.brand || '';
        this.displayNumber = obj.displayNumber || '';
        this.firstDigits = obj.firstDigits || '';
        this.holderName = obj.holderName || '';
        this.lastDigits = obj.lastDigits || '';
        this.maskedNumber = obj.maskedNumber || '';
        this.month = obj.month || null;
        this.year = obj.year || null;
    }

    // #endregion Constructors (1)
}
