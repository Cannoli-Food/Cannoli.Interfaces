import { AddressEntity } from '../../general';
import { EDocType } from '../../general/enums';
import { IDeveloper } from '../interfaces';

export class DeveloperEntity implements IDeveloper {
  // #region Properties (15)

  public active: boolean = true;
  public address: AddressEntity = new AddressEntity();
  public createdAt: Date = new Date();
  public doc: string = '';
  public docType: EDocType = EDocType.CNPJ;
  public email: string = '';
  public id: string = '';
  public imageUrl: string | null = null;
  public internationalCode: string = '';
  public name: string = '';
  public phoneNumber: string = '';
  public sandbox: boolean = false;
  public slug: string = '';
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (15)

  // #region Constructors (1)

  constructor(data?: Partial<DeveloperEntity>) {
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
