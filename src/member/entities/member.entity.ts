import { BaseEntity } from '../../general';
import { EMemberRules, EMemberType } from '../enums';
import { IMember } from '../interfaces';

export class MemberEntity extends BaseEntity implements IMember {
  // #region Properties (17)

  public active: boolean = true;
  public companyName: string = '';
  public containerName: string = '';
  public email: string = '';
  public imageUrl: string | null = '';
  public internationalCode: string = '55';
  public name: string = '';
  public partnerId: string | null = '';
  public phoneNumber: string = '';
  public phoneNumberVerified: boolean = false;
  public phoneNumberVerifiedAt: Date | null = null;
  /**
   * @deprecated Use `imageUrl` instead
   */
  public photoUrl: string | null = '';
  public rule: EMemberRules = EMemberRules.USER;
  public tags: string[] = [];
  public type: EMemberType | null = EMemberType.CLIENT;
  /**
   * @deprecated Use `id` instead.
   */
  public uid: string = '';

  // #endregion Properties (17)

  // #region Constructors (1)

  constructor(data?: Partial<MemberEntity>) {
    super(data);
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
