import { IIuguAccountLastVerificationRequestData } from './i-iugu-account-info-last-ver-req-data';
import { IIuguInformations } from './i-iugu-informations';
import { IuguSplit } from './i-iugu-split';

export interface IIuguFullAccount {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    can_receive?: boolean;
    is_verified?: boolean;
    last_verification_request_status: 'accepted' | string;
    last_verification_request_data: IIuguAccountLastVerificationRequestData;
    last_verification_request_feedback: string;
    change_plan_type: number;
    subscriptions_trial_period: number;
    subscriptions_billing_days: number;
    disable_emails: boolean;
    last_withdraw: Date;
    reply_to: string;
    webapp_on_test_mode: boolean;
    marketplace: boolean;
    auto_withdraw: boolean; // Saque automático
    default_return_url: string;
    credit_card_verified: boolean;
    fines: boolean; // Multas
    late_payment_fine: number; // Valor da multa em % (Ex: 2)
    per_day_interest: boolean; // Juros de mora
    old_advancement: boolean;
    early_payment_discount: boolean;
    early_payment_discount_days: number;
    early_payment_discount_percent: number;
    disabled_withdraw: boolean;
    payment_email_notification: boolean;
    payment_email_notification_receiver: string;
    /**
     * @description
     * Antecipação Automática. 
     * Só pode ser atribuído caso a conta tenha a funcionalidade de Novo Adiantamento habilitado.
     */
    auto_advance: boolean;
    /**
     * @description
     * Obrigatório caso auto_advance seja true e auto_advance_type diferente de 'daily'. 
     * Em caso de auto_advance_type = weekly, recebe valores de 0 a 6 (Número correspondente ao dia da semana que a antecipação será realizada, 0 para domingo, 1 para segunda e assim por diante). 
     * Em caso de auto_advance_type = monthly, recebe valores de 1 a 28 (Número correspondente ao dia do mês que a antecipação será realizada). 
     * Em caso de auto_advance_type = days_after_payment, recebe valores de 1 a 30 (Número de dias após o pagamento em que a antecipação será realizada)
     */
    auto_advance_type: 'days_after_payment' | 'daily' | 'weekly' | 'monthly';
    auto_advance_option: number;
    balance: string;
    balance_in_protest: string;
    balance_available_for_withdraw: string;
    protected_balance: string;
    payable_balance: string;
    receivable_balance: string;
    commission_balance: string;
    volume_last_month: string;
    volume_this_month: string;
    total_subscriptions: number;
    total_active_subscriptions: number;
    taxes_paid_last_month: string;
    taxes_paid_this_month: string;
    has_bank_address?: boolean;
    permissions: string[];
    custom_logo_url: null;
    custom_logo_small_url: null;
    early_payment_discounts: { days: number; percent: number; }[];
    informations: IIuguInformations[];
    splits: IuguSplit[];
}

