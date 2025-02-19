import { INatipayJwtPayloadApp } from '../interfaces/i-payload-app';

export class NatipayJwtPayloadAppEntity implements INatipayJwtPayloadApp {
  // #region Properties (3)

  public id: string = '';
  public slug: string = '';

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<NatipayJwtPayloadAppEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
