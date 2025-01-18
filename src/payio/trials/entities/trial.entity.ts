import { IPayioTrial } from '../interfaces/i-trial';

export class PayioTrialEntity implements IPayioTrial {
  // #region Properties (9)

  public companyId: string = '';
  public createdAt: Date = new Date();
  public id: string = '';
  public planId: string = '';
  public subscriptionId: string = '';
  public trialEndAt: Date = new Date();
  public trialStartAt: Date = new Date();
  public updatedAt: Date = new Date();
  public userId: string = '';

  // #endregion Properties (9)

  // #region Constructors (1)

  constructor(data?: Partial<PayioTrialEntity>) {
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
