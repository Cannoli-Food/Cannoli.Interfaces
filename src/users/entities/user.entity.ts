import { MemberTypeEnum } from '../../member/enums';
import { IUser } from '../interfaces';
import { UserSessionEntity } from './user-session.entity';

export class UserEntity implements IUser {
  // #region Properties (12)

  public active: boolean = true;
  public createdAt: Date = new Date();
  public email: string | null = null;
  public id: string = '';
  public imageUrl: string | null = null;
  public internationalCode: string = '55';
  public name: string = '';
  public phoneNumber: string = '';
  public session: UserSessionEntity = new UserSessionEntity();
  public tags: string[] = [];
  public type: MemberTypeEnum | null = null;
  public updatedAt: Date = new Date();

  // #endregion Properties (12)

  // #region Constructors (1)

  constructor(data?: Partial<UserEntity>) {
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
