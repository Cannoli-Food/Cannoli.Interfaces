import { IMenuScheduleV2 } from '../../mobyo/mobyo-api/interfaces/i-menu-schedule-v2';
import { ECampaignRuleType } from '../enums/rule-types.enum';

export interface ICampaignRule {
  type: ECampaignRuleType;
  value?: string | number | Date | boolean | IMenuScheduleV2;
  description: string;
}

