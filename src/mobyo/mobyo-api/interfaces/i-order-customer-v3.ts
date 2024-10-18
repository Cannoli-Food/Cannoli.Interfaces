
// #region interfacees (2)

import { ICoords } from "../../../general";
import { IUsedVoucher } from "../../mobyo-customer-mobyo";

export interface IOrdersCustomerPhone {
    // #region Properties (4)

    
    description: String;
    
    localizer: String;
    
    localizerExpiration: String;
    
    number: String;

    // #endregion Properties (4)
}

export interface IOrderCustomerV3 {
    // #region Properties (7)

    
    documentNumber: string;
    
    email: string;
    
    id: string;
    
    name: string;
    
    ordersCountOnMerchant: number;
    
    phone: IOrdersCustomerPhone;
    
    picture: string;
    birthday: Date | null;
    coords: ICoords | null;
}

// #endregion interfacees (2)

// #region Functions (3)