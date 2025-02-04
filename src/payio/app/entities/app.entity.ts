import { EPayuioAppSlug } from '../enums';
import { IPayioApp } from '../interfaces/i-app';

export class PayioAppEntity implements IPayioApp {
  // #region Properties (10)

  public active: boolean = false;
  public description: string = '';
  public downloadUrl: string = '';
  public id: string = '';
  public name: string = '';
  public price: number = 0;
  public secret: string = '';
  public slug: EPayuioAppSlug = EPayuioAppSlug.none;
  public tags: string[] = [];
  public version: string = '0.0.1';

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<PayioAppEntity>) {
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
