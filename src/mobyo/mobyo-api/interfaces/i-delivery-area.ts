
import { ILatLng } from './i-company-lat-lng';

export interface IDeliveryArea {
    // #region Properties (8)

    
    deliveryFee: number;
    
    id: string;
    latlngs: ILatLng[];
    
    maxTime: number;
    
    minTime: number;
    
    minimumOrderValue: number;
    
    name: string;
    
    sequence: number;

    // #endregion Properties (8)
}

