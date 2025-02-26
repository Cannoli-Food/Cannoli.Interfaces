import {
  IPayioChefConfig,
  IPayioChefConfigOperation,
  IPayioChefConfigPrinter,
  IPayioChefConfigScale,
  IPayioChefConfigTabs,
  IPayioChefConfigWebhook,
} from '../interfaces';
import { PayioChefConfigOperationEntity } from './chef-config-operation.entity';
import { PayioChefConfigScaleEntity } from './chef-config-scale.entity';

export class PayioChefConfigEntity implements IPayioChefConfig {
  public createdAt: Date = new Date();
  public id: string = '';
  public name: string = '';
  public operation: IPayioChefConfigOperation = new PayioChefConfigOperationEntity();
  public printer: IPayioChefConfigPrinter | null = null;
  public scale: IPayioChefConfigScale = new PayioChefConfigScaleEntity();
  public tabs: IPayioChefConfigTabs[] = [];
  public updatedAt: Date = new Date();
  public webhook: IPayioChefConfigWebhook[] = [];

  constructor(data?: Partial<PayioChefConfigEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
