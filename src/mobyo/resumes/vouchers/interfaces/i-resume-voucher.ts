import { IMobyoInfo, INatiInfo } from '../../../../general';
import { EVoucherTargetTypes } from '../../../../voucher';
import { IResumeVoucherItem } from './i-resume-voucher-item';

export interface IResumeVoucher {
  id: string; // padrão AAAAMMDD
  createdAt: Date;
  updatedAt: Date;
  item: IResumeVoucherItem;
  items: { id: string; item: IResumeVoucherItem }[]; // id no padrão MM - DD - HH
  targetType: { id: EVoucherTargetTypes; item: IResumeVoucherItem }[];
  info: IMobyoInfo | INatiInfo;
}
