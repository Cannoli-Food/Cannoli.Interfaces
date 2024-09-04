import { ICoords } from './i-coords';
import { IDeliveryArea } from './i-delivery-area';

export interface IAddress {
  // #region Properties (7)

  city: string;
  complement: string | null;
  neighborhood: string;
  country: string;
  id: string | null;
  formattedAddress: string | null;
  postalCode: string;
  state: string;
  deliveryArea: IDeliveryArea | null;
  streetName: string;
  name: string | null;
  reference: string | null;
  isDefault: boolean;
  streetNumber: string;
  coords: ICoords;
  mobyoDeliveryFee: number | null;
  mobyoDeliveryFeeOnline: number | null;

  // #endregion Properties (7)
}
