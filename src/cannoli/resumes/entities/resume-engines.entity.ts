import { EEngineType } from '../../cannoli-api';
import { IResumeEngine, IResumeItem } from '../interfaces';
import { ResumeItemEntity } from './resume-item.entity';

export class ResumeEnginesEntity implements IResumeEngine {
  // #region Properties (4)

  public id: string = '';
  public item: IResumeItem = new ResumeItemEntity();
  public name: string = '';
  public type: EEngineType = EEngineType.cannoli;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeEnginesEntity>) {
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
