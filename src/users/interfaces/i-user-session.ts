export interface IUserSession {
  // #region Properties (6)

  currentSessionId: string | null;
  deviceInfo: string | null;
  isLocked: boolean;
  lastLoginAt: Date | null;
  lastSessionIp: string | null;
  sessionExpiresAt: Date | null;

  // #endregion Properties (6)
}
