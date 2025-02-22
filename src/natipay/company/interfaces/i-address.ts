import { ICoords } from '../../../general/interfaces/i-coords';

export interface INatipayAddress {
  // #region Properties (11)

  city: string;
  complement: string | null;
  coords: ICoords;
  country: string | null | undefined;
  neighborhood: string;
  postalCode: string;
  state: string;
  streetName: string;
  streetNumber: string;

  // #endregion Properties (11)
}
