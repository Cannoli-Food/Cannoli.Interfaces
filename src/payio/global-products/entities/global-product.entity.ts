import { IPayioGlobalProduct } from '../interfaces/i-global-products';

export class PayioGlobalProductEntity implements IPayioGlobalProduct {
  // #region Properties (15)

  public active: boolean = true;
  public avgPrice: number = 0;
  public brand: string = '';
  public code: string = '';
  public createdAt: Date = new Date();
  public name: string = '';
  public id: string = '';
  public maxPrice: number = 0;
  public minPrice: number = 0;
  public quantityPackaging: number = 0;
  public tags: string[] = [];
  public thumbnail: string | null = null;
  public unit: string = '';
  public updatedAt: Date = new Date();
  public weight: number = 0;

  // #endregion Properties (15)

  // #region Constructors (1)

  constructor(data?: Partial<PayioGlobalProductEntity>) {
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
