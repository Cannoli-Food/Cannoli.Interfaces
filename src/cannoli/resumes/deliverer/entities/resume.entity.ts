import { IInfo, ICannoliInfo, CannoliInfoEntity } from '../../../../general';
import { IResumeChildInfo, ResumeChildInfoEntity } from '../../../../resume';
import { ResumeItemEntity } from '../../entities';
import { IResumeDeliverer } from '../interfaces/i-resume';

export class ResumeDelivererEntity implements IResumeDeliverer {
  public id: string = ''; // padrão AAAAMMDD
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  public item: ResumeItemEntity = new ResumeItemEntity();
  public items: { id: string; item: ResumeItemEntity }[] = []; // id no padrão MM - DD - HH
  public info: ICannoliInfo | IInfo = new CannoliInfoEntity();
  public active: boolean = true;
  public delivererInfo: IResumeChildInfo = new ResumeChildInfoEntity();

  constructor(data?: Partial<ResumeDelivererEntity>) {
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
