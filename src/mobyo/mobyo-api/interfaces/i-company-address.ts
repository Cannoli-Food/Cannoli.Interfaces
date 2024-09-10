
import { CreateCompanyAddressDto } from '../dto/create-company-address.dto';

export class ICompanyAddress {
    // #region Properties (7)

    
    public city: string;
    
    public complement?: string;
    
    public district: string;
    
    public state: string;
    
    public streetName: string;
    
    public streetNumber: string;
    
    public zipCode: string;

    // #endregion Properties (7)

    // #region Constructors (1)

    constructor(body: CreateCompanyAddressDto) {
        this.zipCode = body.zipCode;
        this.streetName = body.streetName;
        this.streetNumber = body.streetNumber;
        this.complement = body.complement;
        this.district = body.district;
        this.city = body.city;
        this.state = body.state;
    }

    // #endregion Constructors (1)
}
