import { CampaignRuleTypes } from './rule-types.enum';

export interface ICampaignRule {
    type: CampaignRuleTypes;
    value: any;
    description: string;
}

export function factoryEmptyCampaignRule(type: string) {
    return {
        type,
        value: null,
        description: '',
    } as ICampaignRule
}
