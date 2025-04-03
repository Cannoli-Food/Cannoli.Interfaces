
import { ILatLng } from './i-company-lat-lng';

export interface IDeliveryAreaFixed {
    // #region Properties (8)

    active: boolean;
    
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

