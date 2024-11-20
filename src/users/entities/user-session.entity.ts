import { IUserSession } from '../interfaces/i-user-session';

export class UserSessionEntity implements IUserSession {
  // #region Properties (6)

  public currentSessionId: string | null = null;
  public deviceInfo: string | null = null;
  public isLocked: boolean = false;
  public lastLoginAt: Date | null = null;
  public lastSessionIp: string | null = null;
  public sessionExpiresAt: Date | null = null;

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<UserSessionEntity>) {
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
