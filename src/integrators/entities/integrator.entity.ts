import { AddressEntity } from '../../general';
import { EDocType } from '../../general/enums';
import { IIntegrator } from '../interfaces';

export class IntegratorEntity implements IIntegrator {
  // #region Properties (13)

  public active: boolean = true;
  public address: AddressEntity = new AddressEntity();
  public doc: string = '';
  public docType: EDocType = EDocType.CNPJ;
  public email: string = '';
  public id: string = '';
  public imageUrl: string | null = null;
  public internationalCode: string = '';
  public name: string = '';
  public phoneNumber: string = '';
  public sandbox: boolean = false;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (13)

  // #region Constructors (1)

  constructor(data?: Partial<IntegratorEntity>) {
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
