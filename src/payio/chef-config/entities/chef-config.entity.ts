import {
  IPayioChefConfig,
  IPayioChefConfigOperation,
  IPayioChefConfigPrinter,
  IPayioChefConfigScale,
  IPayioChefConfigWebhook,
} from '../interfaces';
import { PayioChefConfigOperationEntity } from './chef-config-operation.entity';
import { PayioChefConfigScaleEntity } from './chef-config-scale.entity';

export class PayioChefConfigEntity implements IPayioChefConfig {
  // #region Properties (9)

  public createdAt: Date = new Date();
  public id: string = '';
  public name: string = '';
  public operation: IPayioChefConfigOperation = new PayioChefConfigOperationEntity();
  public printer: IPayioChefConfigPrinter | null = null;
  public scale: IPayioChefConfigScale = new PayioChefConfigScaleEntity();
  public updatedAt: Date = new Date();
  public webhook: IPayioChefConfigWebhook[] = [];

  // #endregion Properties (9)

  // #region Constructors (1)

  constructor(data?: Partial<PayioChefConfigEntity>) {
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
