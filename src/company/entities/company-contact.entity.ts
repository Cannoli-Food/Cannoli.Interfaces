import { ICompanyContact } from '../interfaces';

export class CompanyContactEntity implements ICompanyContact {
  // #region Properties (3)

  public title: string = '';
  public updatedAt?: Date | undefined = undefined;
  public value: string | number | boolean | Date | null | undefined = ''; 

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<CompanyContactEntity>) {
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
