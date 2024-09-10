import { v4 as uuid } from 'uuid';
import { CompanyInfo } from '../../../framework/decorators/company-info';
import { CreateCampaignDto } from '../usercases/create-campaign/create-campaign.dto';
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
export function factoryCampaign(
    companyInfo: CompanyInfo,
    body: CreateCampaignDto,
) {
    const data = {
        active: true,
        concluded: false,
        concludedAt: null,
        companyId: companyInfo.companyId,
        containerId: companyInfo.containerId,
        createdAt: new Date(),
        id: uuid().replace(/\-/g, '').toUpperCase(),
        key: body.key,
        name: body.name,
        public: body.public,
        publishedAt: null,
        rules: body.rules,
        sponsorship: body.sponsorship,
        targetItemsId: [],
        ordersCountDeliveredOnRestaurant: [],
        targetType: body.targetType,
        updatedAt: new Date(),
    } as ICampaign;
    return data;
}
