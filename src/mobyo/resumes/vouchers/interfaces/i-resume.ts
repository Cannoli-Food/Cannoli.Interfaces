import { IInfo, IMobyoInfo } from '../../../../general';
import { EVoucherTargetTypes } from '../../../../voucher';
import { IResumeItem } from '../../interfaces';

export interface IResumeVoucher {
  id: string; // padrão AAAAMMDD
  createdAt: Date;
  updatedAt: Date;
  item: IResumeItem;
  items: { id: string; item: IResumeItem }[]; // id no padrão MM - DD - HH
  targetType: { id: EVoucherTargetTypes; item: IResumeItem }[];
  info: IMobyoInfo | IInfo;
}
