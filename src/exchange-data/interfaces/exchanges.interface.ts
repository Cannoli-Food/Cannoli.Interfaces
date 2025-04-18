export interface IExchange {
  // #region Properties (8)

  batchId: string | null;
  collectedAt: Date;
  createdAt: Date;
  symbol: string;
  id: string;
  name: string;
  price: number;
  updatedAt: Date;
  urlApi: string;

  // #endregion Properties (8)
}
