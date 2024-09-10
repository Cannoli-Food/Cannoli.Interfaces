
import { CreateCompanyCoordsDto } from '../dto/create-company-coords.dto';

export class ICompanyCoords {
    // #region Properties (2)

    
    public latitude: number;
    
    public longitude: number;

    // #endregion Properties (2)

    // #region Constructors (1)

    constructor(body: CreateCompanyCoordsDto) {
        this.latitude = body.latitude;
        this.longitude = body.longitude;
    }

    // #endregion Constructors (1)
}
