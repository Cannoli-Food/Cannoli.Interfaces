import { IPayioProduct } from '../interfaces/i-products';

export class PayioProductEntity implements IPayioProduct {
  public active: boolean = true;
  public brand: string = '';
  public code: string = '';
  public companyId: string = '';
  public containerId: string | null = null;
  public createdAt: Date = new Date();
  public id: string = '';
  public name: string = '';
  public ncm: string | null = '';
  public price: number = 0;
  public quantityPackaging: number = 0;
  public sandbox: boolean = false;
  public tags: string[] = [];
  public thumbnail: string | null = null;
  public unit: string = 'UN';
  public updatedAt: Date = new Date();
  public weight: number = 0;

  constructor(data?: Partial<PayioProductEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
