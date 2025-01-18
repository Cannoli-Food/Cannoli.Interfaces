import { EDocType } from '../../../general';
import { IPayioDistributorResponsible } from '../interfaces/i-distributor-responsible';

export class PayioDistributorResponsibleEntity implements IPayioDistributorResponsible {
  // #region Properties (6)

  public doc: string = '';
  public docType: EDocType = EDocType.CPF;
  public email: string = '';
  public internationalCode: string = '55';
  public name: string = '';
  public phoneNumber: string = '';

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<PayioDistributorResponsibleEntity>) {
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
