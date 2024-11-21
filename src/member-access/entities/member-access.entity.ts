import { MemberRulesEnum } from '../../member/enums';
import { IMemberAccess } from '../interfaces/i-member-access';

export class MemberAccessEntity implements IMemberAccess {
  // #region Properties (13)

  public accessCount: number | null = null;
  public active: boolean = true;
  public companyId: string = '';
  public containerId: string | null = null;
  public createdAt: Date = new Date();
  public id: string = '';
  public imageUrl: string | null = null;
  public lastAccessAt: Date | null = null;
  public memberId: string = '';
  public name: string = '';
  public rule: MemberRulesEnum = MemberRulesEnum.USER;
  public tags: string[] = [];
  public updated: Date = new Date();

  // #endregion Properties (13)

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
