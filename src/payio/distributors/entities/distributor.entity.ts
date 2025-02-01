import { EDocType } from '../../../general';
import { IAction } from '../../../mobyo/mobyo-api/interfaces/action.interface';
import { PayioAddressEntity } from '../../company';
import { EPayioDistributorStatus } from '../enums';
import { IPayioDistributor } from '../interfaces';
import { PayioDistributorResponsibleEntity } from './distributor-responsible.entity';

export class PayioDistributorEntity implements IPayioDistributor {
  // #region Properties (20)

  public actions: IAction[] = [];
  public address: PayioAddressEntity = new PayioAddressEntity();
  public contratoSocialPdfUrl: string | null = null;
  public createdAt: Date = new Date();
  public doc: string = '';
  public docType: EDocType = EDocType.CNPJ;
  public email: string = '';
  public id: string = '';
  public imageUrl: string | null = null;
  public internationalCode: string = '55';
  public logoUrl: string | null = null;
  public logs: string[] = [];
  public name: string = '';
  public phoneNumber: string = '';
  public responsibles: PayioDistributorResponsibleEntity[] = [];
  public sandbox: boolean = false;
  public slug: string = '';
  public status: EPayioDistributorStatus = EPayioDistributorStatus.PLACED;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (20)

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
