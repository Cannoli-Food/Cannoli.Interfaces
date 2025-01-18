import { EDocType, IPaymentProvider } from '../../../general';
import { PayioAddressEntity } from '../../company';
import { IPayioDistributor } from '../interfaces/i-distributor';

export class PayioDistributorEntity implements IPayioDistributor {
  // #region Properties (19)

  public active: boolean = false;
  public address: PayioAddressEntity = new PayioAddressEntity();
  public containerId: string = '';
  public createdAt: Date = new Date();
  public doc: string = '';
  public docType: EDocType = EDocType.CNPJ;
  public email: string = '';
  public fullName: string = '';
  public id: string = '';
  public imageUrl: string | null = null;
  public internationalCode: string = '55';
  public logoUrl: string | null = null;
  public name: string = '';
  public paymentProvider: IPaymentProvider | null = null;
  public phoneNumber: string = '';
  public sandbox: boolean = false;
  public tags: string[] = [];
  public updatedAt: Date = new Date();
  public version: string = '';

  // #endregion Properties (19)

  // #region Constructors (1)

  constructor(data?: Partial<PayioDistributorEntity>) {
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
