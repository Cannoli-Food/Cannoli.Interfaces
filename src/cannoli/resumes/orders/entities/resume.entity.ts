import { IInfo, ICannoliInfo, CannoliInfoEntity } from '../../../../general';
import { ResumeItemEntity } from '../../entities';
import { IResumeEngine } from '../../interfaces';
import { IResumeOrder } from '../interfaces/i-resume';

export class ResumeOrderEntity implements IResumeOrder {
  public id: string = ''; // padrão AAAAMMDD
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  public item: ResumeItemEntity = new ResumeItemEntity();
  public items: { id: string; item: ResumeItemEntity }[] = []; // id no padrão MM - DD - HH
  public engines: IResumeEngine[] = [];
  public info: ICannoliInfo | IInfo = new CannoliInfoEntity();

  constructor(data?: Partial<ResumeOrderEntity>) {
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
