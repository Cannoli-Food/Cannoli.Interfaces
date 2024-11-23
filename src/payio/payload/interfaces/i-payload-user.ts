export interface IPayioJwtPayloadUser {
  // #region Properties (3)

  phoneNumber: string;
  internationalCode: string;
  email: string | null;
  id: string;
  name: string;
  roles: string[];

  // #endregion Properties (3)
}
