// #region interfacees (2)

import { ICoords } from '../../../general';

export interface IOrdersCustomerPhone {
  // #region Properties (4)

  description: string;

  localizer: string;

  localizerExpiration: string;

  number: string;

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
