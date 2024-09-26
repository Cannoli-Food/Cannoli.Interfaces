export interface IOrderDeliveryLatLan {
    
    latitude: number;
    
    longitude: number;
}
export interface IOrderDeliveryAddressV3 {
    // #region Properties (12)

    
    city: string;
    
    complement: string;
    coordinates: IOrderDeliveryLatLan;
    
    country: string;
    
    formattedAddress: string;
    
    name?: string;
    
    neighborhood: string;
    
    postalCode: string;
    
    reference: string;
    
    state: string;
    
    streetName: string;
    
    streetNumber: string;
    id?:string

    // #endregion Properties (12)
}
