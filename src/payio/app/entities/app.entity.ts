import { IPayioApp } from '../interfaces/i-app';

export class PayioAppEntity implements IPayioApp {
  // #region Properties (11)

  public active: boolean = false;
  public description: string = '';
  public downloadUrl: string = '';
  public features: string[] = [];
  public id: string = '';
  public name: string = '';
  public price: number = 0;
  public secrets: string = '';
  public slug: string = '';
  public tags: string[] = [];

  // #endregion Properties (11)

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
