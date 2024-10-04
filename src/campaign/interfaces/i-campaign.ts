import { EDiscountType, IMobyoInfo, INatiInfo } from '../../general';
import { ECampaignStatus } from '../enums';
import { ECampaignTargetTypes } from '../enums/target-types.enum';
import { ICampaignRule } from './i-campaign-rule';
import { ICampaignSponsorship } from './i-campaign-sponsorship';

export interface ICampaign {
  info: IMobyoInfo | INatiInfo;
  concludedAt: Date;
  createdAt: Date;
  id: string;
  isPublic: boolean;
  key: string;
  name: string;
  activatedAt: Date;
  rules: ICampaignRule[];
  type: EDiscountType;
  amount: number; // soma dos values dos sponsorships
  sponsorship: ICampaignSponsorship[]; // o valor total da campanha necessariamente precisa estar aqui
  status: ECampaignStatus;
  targetsId: string[];
  targetType: ECampaignTargetTypes;
  updatedAt: Date;
  limit: number;
  isExclusive: boolean;
}
