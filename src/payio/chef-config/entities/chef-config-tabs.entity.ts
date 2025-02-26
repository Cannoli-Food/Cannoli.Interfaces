import { IPayioChefConfigTabs } from '../interfaces';

export class PayioChefConfigTabsEntity implements IPayioChefConfigTabs {
  public active: boolean = true;
  public id: string = '';
  public name: string | null = '';

  constructor(data?: Partial<PayioChefConfigTabsEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
