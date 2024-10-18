import { IMobyoInfo, INatiInfo, MobyoInfoEntity } from '../../../../general';
import { EVoucherTargetTypes } from '../../../../voucher';
import { ResumeItemEntity } from '../../entities';
import { IResumeVoucher } from '../interfaces';

export class ResumeVoucherEntity implements IResumeVoucher {
  public id: string = ''; // padrão AAAAMMDD
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  public item: ResumeItemEntity = new ResumeItemEntity();
  public items: { id: string; item: ResumeItemEntity }[] = []; // id no padrão MM - DD - HH
  public targetType: { id: EVoucherTargetTypes; item: ResumeItemEntity }[] = [];
  public info: IMobyoInfo | INatiInfo = new MobyoInfoEntity();

  constructor(data?: Partial<ResumeVoucherEntity>) {
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
