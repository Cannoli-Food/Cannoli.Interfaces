
import { ILatLng } from './i-company-lat-lng';

export class IDeliveryArea {
    // #region Properties (8)

    
    public deliveryFee: number;
    
    public id: string;
    public latlngs: ILatLng[];
    
    public maxTime: number;
    
    public minTime: number;
    
    public minimumOrderValue: number;
    
    public name: string;
    
    public sequence: number;

    // #endregion Properties (8)
}

