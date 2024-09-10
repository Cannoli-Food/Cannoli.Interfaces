
export interface IIuguSubscription {
    active: boolean;
    created_at: Date;
    credits: number;
    credits_based: boolean;
    credits_cycle: number;
    credits_min: number;
    currency: string;
    custom_variables: Array<{ name: string, value: string; }>;
    customer_email: string;
    customer_id: string;
    customer_name: string;
    customer_ref: string;
    cycled_at: Date;
    cycles_count: number,
    expires_at: Date;
    features: {
        feat: {
            name: string,
            value: number,
        },
    };
    id: string;
    ignore_due_email: any;
    in_trial: string;
    logs: IIuguSubscriptionLog[];
    max_cycles: number,
    payable_with: string;
    plan_identifier: string;
    plan_name: string;
    plan_ref: string;
    price_cents: number;
    recent_invoices: IIuguSubscriptionRecentInvoice[];
    subitems: IIuguSubscriptionSubitem[];
    suspend_on_invoice_expired: boolean,
    suspended: boolean;
    two_step: boolean,
    updated_at: Date;
}

export interface IIuguSubscriptionSubitem {
    id: string;
    description: string;
    quantity: number;
    price_cents: number;
    price: number;
    total: number;
}

export interface IIuguSubscriptionRecentInvoice {
    id: string;
    due_date: Date;
    status: string;
    total: string;
    secure_url: string;
}

export interface IIuguSubscriptionLog {
    id: string;
    description: string;
    notes: string;
    created_at: Date;
}