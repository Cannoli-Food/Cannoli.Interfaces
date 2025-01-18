import { MemberEntity } from '../../../member';
import { EPayuioDistributorProfile } from '../enums/profile.enum';
import { IPayioMember } from '../interfaces/i-member';

export class PayioMemberEntity extends MemberEntity implements IPayioMember {
  // #region Properties (1)

  public profile: EPayuioDistributorProfile = EPayuioDistributorProfile.USER;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(data?: Partial<PayioMemberEntity>) {
    super();
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
