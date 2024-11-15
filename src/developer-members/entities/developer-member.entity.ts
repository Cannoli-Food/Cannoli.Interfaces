import { MemberEntity } from '../../member';
import { IDeveloperMember } from '../interfaces/i-developer-member';

export class DeveloperMemberEntity extends MemberEntity implements IDeveloperMember {
  // #region Properties (1)

  public developerId: string = '';

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(data?: Partial<DeveloperMemberEntity>) {
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
