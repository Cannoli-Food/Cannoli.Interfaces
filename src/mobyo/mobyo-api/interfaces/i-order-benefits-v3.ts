
import * as _ from 'lodash';
import { ICampaign } from '../../campaigns/interfaces/i-campaign';
export class ISponsorshipValues {
    // #region Properties (2)

    
    public name: string;
    
    public value: number;

    // #endregion Properties (2)
}
export class IOrderBenefitsV3 {
    // #region Properties (6)
    public sponsorshipValues?: ISponsorshipValues[];
    
    public target: string = 'MOBYO_ENTREGAS' || 'DELIVERY_FEE' || 'CART';
    
    public value: number;

    // #endregion Properties (6)
}

export function factoryOrderBenefitsV3(body: ICampaign): IOrderBenefitsV3 {
    const value = _.sumBy(body.sponsorship, o => o.value) as number;
    return {
        sponsorshipValues: body.sponsorship,
        value,
        target: body.targetType,
    } as IOrderBenefitsV3;
}
