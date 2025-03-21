export interface IVerifierToken {
  // #region Properties (8)

  createdAt: Date | number;
  updatedAt: Date | number;
  expiresAt: Date | number;
  id: string;
  receiver: string;
  message: string;
  value: string;
  verified: boolean;
  verifiedAt: number;
  appId: string | null;

  // #endregion Properties (8)
}
