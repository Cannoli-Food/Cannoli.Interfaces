import { IExchange } from '../interfaces';

export class ExchangeEntity implements IExchange {
  // #region Properties (9)

  public batchId: string | null = null;
  public collectedAt: Date = new Date();
  public createdAt: Date = new Date();
  public id: string = '';
  public name: string = '';
  public price: number = 0;
  public symbol: string = '';
  public updatedAt: Date = new Date();
  public urlApi: string = '';

  // #endregion Properties (9)
}
