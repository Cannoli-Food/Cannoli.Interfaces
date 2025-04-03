import { ECampaignRuleType } from '../enum/rule-types.enum';

export interface ICampaignRule {
  type: ECampaignRuleType;
  value: any;
  description: string;
}
