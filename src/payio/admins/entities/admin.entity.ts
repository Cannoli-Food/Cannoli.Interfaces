import { EPayioAdminRole } from '../enums/role.enum';
import { IPayioAdmin } from '../interfaces/i-admin';

export class PayioAdminEntity implements IPayioAdmin {
  // #region Properties (11)

  public accessCount: number | null = null;
  public active: boolean = true;
  public createdAt: Date = new Date();
  public id: string = '';
  public imageUrl: string | null = null;
  public lastAccessAt: Date | null = null;
  public name: string = '';
  public role: EPayioAdminRole = EPayioAdminRole.USER;
  public tags: string[] = [];
  public updatedAt: Date = new Date();
  public userId: string = '';

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor(data?: Partial<PayioAdminEntity>) {
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
