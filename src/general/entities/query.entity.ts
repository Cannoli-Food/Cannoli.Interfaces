import { IQuery } from '../interfaces/i-query';

export class QueryEntity implements IQuery {
  // #region Properties (12)

  public apikey?: string | null | undefined = null;
  public companyId?: string | null | undefined = null;
  public containerId?: string | null | undefined = null;
  public dateField?: string | null | undefined = null;
  public endDate?: string | undefined = undefined;
  public filterBy?: 'startDate' | 'endDate' | 'none' | undefined = undefined;
  public lastDocId?: string | null | undefined = null;
  public limit: string = '100';
  public query?: string | undefined = undefined;
  public sandbox?: '' | 'undefined' | 'true' | 'false' | 'null' | undefined = '';
  public startDate?: string | undefined = undefined;
  public status?: string | undefined = undefined;

  // #endregion Properties (12)

  // #region Constructors (1)

  constructor(data?: Partial<QueryEntity>) {
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
