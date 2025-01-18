export interface IPayioChefConfigPrinter {
  // #region Properties (10)

  interface: 'USB' | 'TCP/IP';
  port: string | null;
  model: string | null;
  brand: string | null;
  active: boolean;

  // #endregion Properties (10)
}
