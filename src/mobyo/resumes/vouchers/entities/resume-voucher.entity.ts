import { IMobyoInfo, INatiInfo, MobyoInfoEntity } from '../../../../general';
import { EVoucherTargetTypes } from '../../../../voucher';
import { IResumeVoucher } from '../interfaces';
import { ResumeVoucherItemEntity } from './resume-voucher-item.entity';

export class ResumeVoucherEntity implements IResumeVoucher {
  public id: string = ''; // padrão AAAAMMDD
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  public item: ResumeVoucherItemEntity = new ResumeVoucherItemEntity();
  public items: { id: string; item: ResumeVoucherItemEntity }[] = []; // id no padrão MM - DD - HH
  public targetType: { id: EVoucherTargetTypes; item: ResumeVoucherItemEntity }[] = [];
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
