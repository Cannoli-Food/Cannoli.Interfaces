
import { IAddress } from 'cecon-interfaces';

export class IOrderDeliveryLatLan {
    
    public latitude: number;
    
    public longitude: number;
}
export class IOrderDeliveryAddressV3 {
    // #region Properties (12)

    
    public city: string;
    
    public complement: string;
    public coordinates: IOrderDeliveryLatLan;
    
    public country: string;
    
    public formattedAddress: string;
    
    name?: string;
    
    public neighborhood: string;
    
    public postalCode: string;
    
    public reference: string;
    
    public state: string;
    
    public streetName: string;
    
    public streetNumber: string;

    // #endregion Properties (12)
}

export function factoryOrderDeliveryAddressV3(address: IAddress | null = null): IOrderDeliveryAddressV3 {
    const data: any = {
        coords: { latitude: 0, longitude: 0 }
    };
    if (!address) { return data as any as IOrderDeliveryAddressV3; }
    data.coords = address.coords;
    data.city = address.city;
    data.complement = address.complement;
    data.name = address.name || null;
    data.country = 'BRAZIL';
    data.formattedAddress = address.formattedAddress || `${address.streetName}, ${address.streetNumber}  ${address.complement ? (', ' + address.complement) : ''}`;
    data.neighborhood = address.neighborhood;
    data.postalCode = address.postalCode;
    data.reference = address.reference;
    data.state = address.state;
    data.id = address.id;
    data.streetName = address.streetName;
    data.streetNumber = address.streetNumber;
    return data as any as IOrderDeliveryAddressV3;
}
