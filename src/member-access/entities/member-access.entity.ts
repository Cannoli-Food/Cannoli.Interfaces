import { MobyoEMemberRules } from '../../mobyo';
import { IMemberAccess } from '../interfaces/i-member-access';

export class MemberAccessEntity implements IMemberAccess {
  // #region Properties (10)

  public accessCount: number | null = null;
  public active: boolean = true;
  public createdAt: Date = new Date();
  public id: string = '';
  public imageUrl: string | null = null;
  public lastAccessAt: Date | null = null;
  public memberId: string = '';
  public name: string = '';
  public rule: MobyoEMemberRules = MobyoEMemberRules.user;
  public updated: Date = new Date();

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<MemberAccessEntity>) {
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
