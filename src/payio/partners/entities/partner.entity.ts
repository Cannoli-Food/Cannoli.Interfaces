import { PayioPermissionRoleEntity } from '../../permissions';
import { IPayioPartner } from '../interfaces/i-partner';

export class PayioPartnerEntity implements IPayioPartner {
  // #region Properties (15)

  public accessCount: number | null = null;
  public active: boolean = true;
  public companyId: string = '';
  public companyName: string = '';
  public containerId: string | null = null;
  public createdAt: Date = new Date();
  public id: string = '';
  public imageUrl: string | null = null;
  public lastAccessAt: Date | null = null;
  public name: string = '';
  public roles: PayioPermissionRoleEntity[] = [];
  public tags: string[] = [];
  public updated: Date = new Date();
  public userId: string = '';

  // #endregion Properties (15)

  // #region Constructors (1)

  constructor(data?: Partial<PayioPartnerEntity>) {
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
