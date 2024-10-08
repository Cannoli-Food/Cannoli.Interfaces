import { EDiscountType, IMobyoInfo, INatiInfo } from '../../general';
import { EVoucherStatus } from '../enums';
import { EVoucherTargetTypes } from '../enums/target-types.enum';
import { IVoucherRule } from './i-voucher-rule';
import { IVoucherSponsorship } from './i-voucher-sponsorship';

export interface IVoucher {
  info: IMobyoInfo | INatiInfo;
  concludedAt: Date;
  createdAt: Date;
  id: string;
  isPublic: boolean;
  key: string;
  name: string;
  activatedAt: Date;
  rules: IVoucherRule[];
  type: EDiscountType;
  amount: number; // soma dos values dos sponsorships
  sponsorship: IVoucherSponsorship[]; // o valor total da campanha necessariamente precisa estar aqui
  status: EVoucherStatus;
  targetsId: string[];
  targetType: EVoucherTargetTypes;
  updatedAt: Date;
  limit: number;
  isExclusive: boolean;
  usedCount: number;
}
