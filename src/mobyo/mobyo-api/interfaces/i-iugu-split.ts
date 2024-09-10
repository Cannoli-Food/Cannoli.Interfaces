import { ISettingMarketplaceTax } from '../../settings/interfaces/i-setting-marketplace-tax';
import { MarketplaceTaxType } from '../../settings/marketplace-tax-type.enum';

export class IuguSplit {
    /**
     * ID Da conta que irá receber o split.
     */
    recipient_account_id: string;
    cents: number;
    percent: number;
    bank_slip_cents: number;
    bank_slip_percent: number;
    credit_card_cents: number;
    credit_card_percent: number;
    pix_cents: number;
    pix_percent: number;
    /**
     * Permite agregar comissionamento percentual + fixo.
     */
    permit_aggregated: boolean;
    credit_card_1x_cents: number;
    credit_card_2x_cents: number;
    credit_card_3x_cents: number;
    credit_card_4x_cents: number;
    credit_card_5x_cents: number;
    credit_card_6x_cents: number;
    credit_card_7x_cents: number;
    credit_card_8x_cents: number;
    credit_card_9x_cents: number;
    credit_card_10x_cents: number;
    credit_card_11x_cents: number;
    credit_card_12x_cents: number;
    credit_card_1x_percent: number;
    credit_card_2x_percent: number;
    credit_card_3x_percent: number;
    credit_card_4x_percent: number;
    credit_card_5x_percent: number;
    credit_card_6x_percent: number;
    credit_card_7x_percent: number;
    credit_card_8x_percent: number;
    credit_card_9x_percent: number;
    credit_card_10x_percent: number;
    credit_card_11x_percent: number;
    credit_card_12x_percent: number;
    constructor(recipient_account_id: string, type: MarketplaceTaxType, settings: ISettingMarketplaceTax) {
        this.recipient_account_id;
        this.cents = type === MarketplaceTaxType.MASTER ? settings.perOrder.master : settings.perOrder.marketplace;
        this.percent = 0;
        this.bank_slip_cents = 0;
        this.bank_slip_percent = type === MarketplaceTaxType.MASTER ? settings.bankSlip.master : settings.bankSlip.marketplace;
        this.credit_card_cents = 0;
        this.credit_card_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard.master : settings.creditCard.marketplace;
        this.pix_cents = 0;
        this.pix_percent = type === MarketplaceTaxType.MASTER ? settings.pix.master : settings.pix.marketplace;
        this.permit_aggregated = true;
        this.credit_card_1x_cents = 0;
        this.credit_card_2x_cents = 0;
        this.credit_card_3x_cents = 0;
        this.credit_card_4x_cents = 0;
        this.credit_card_5x_cents = 0;
        this.credit_card_6x_cents = 0;
        this.credit_card_7x_cents = 0;
        this.credit_card_8x_cents = 0;
        this.credit_card_9x_cents = 0;
        this.credit_card_10x_cents = 0;
        this.credit_card_11x_cents = 0;
        this.credit_card_12x_cents = 0;
        this.credit_card_1x_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard6x.master : settings.creditCard6x.marketplace;
        this.credit_card_2x_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard6x.master : settings.creditCard6x.marketplace;
        this.credit_card_3x_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard6x.master : settings.creditCard6x.marketplace;
        this.credit_card_4x_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard6x.master : settings.creditCard6x.marketplace;
        this.credit_card_5x_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard6x.master : settings.creditCard6x.marketplace;
        this.credit_card_6x_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard6x.master : settings.creditCard6x.marketplace;
        this.credit_card_7x_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard12x.master : settings.creditCard12x.marketplace;
        this.credit_card_8x_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard12x.master : settings.creditCard12x.marketplace;
        this.credit_card_9x_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard12x.master : settings.creditCard12x.marketplace;
        this.credit_card_10x_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard12x.master : settings.creditCard12x.marketplace;
        this.credit_card_11x_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard12x.master : settings.creditCard12x.marketplace;
        this.credit_card_12x_percent = type === MarketplaceTaxType.MASTER ? settings.creditCard12x.master : settings.creditCard12x.marketplace;
    }
}
