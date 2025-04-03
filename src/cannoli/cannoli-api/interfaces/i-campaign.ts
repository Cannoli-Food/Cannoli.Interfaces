import { ICampaignRule } from './i-campaign-rule';
import { ICampaignSponsorship } from './i-campaign-sponsorship';
export interface ICampaign {
    active: boolean;
    concluded: boolean;
    concludedAt: Date;
    companyId: string;
    containerId: string;
    createdAt: Date;
    id: string;
    key: string;
    name: string;
    public: boolean;
    publishedAt: Date;
    rules: ICampaignRule[];
    sponsorship: ICampaignSponsorship[];
    targetItemsId: [];
    targetType: 'CART' | 'DELIVERY_FEE' | 'ITEM' | 'PROGRESSIVE_ITEM';
    updatedAt: Date;

}
