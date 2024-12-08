import { IPayioProduct } from '../interfaces/i-products';

export class PayioProductEntity implements IPayioProduct {
  // #region Properties (13)

  public active: boolean = true;
  public brand: string = '';
  public code: string = '';
  public createdAt: Date = new Date();
  public id: string = '';
  public name: string = '';
  public price: number = 0;
  public quantityPackaging: number = 0;
  public tags: string[] = [];
  public thumbnail: string | null = null;
  public unit: string = 'UN';
  public updatedAt: Date = new Date();
  public weight: number = 0;

  // #endregion Properties (13)

  // #region Constructors (1)

  constructor(data?: Partial<PayioProductEntity>) {
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
