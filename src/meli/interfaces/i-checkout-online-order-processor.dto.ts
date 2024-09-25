export interface IMeliCheckoutOnline {
    additional_info?: string;
    auto_return?: string;
    back_urls?: {
        failure?: string;
        pending?: string;
        success?: string;
    };
    binary_mode?: boolean;
    client_id?: number;
    collector_id?: number;
    coupon_code?: string | number;
    coupon_labels?: string | number;
    date_created?: Date;
    date_of_expiration?: string | number;
    expiration_date_from?: string | number;
    expiration_date_to?: string | number;
    expires?: boolean;
    external_reference: string;
    id: string;
    init_point: string;
    internal_metadata?: string | number;
    items?: [
        {
            id?: number;
            category_id?: string;
            currency_id?: string;
            description?: string;
            title?: string;
            quantity?: number;
            unit_price?: number;
        }
    ];
    marketplace?: string;
    marketplace_fee?: number;
    metadata?: any;
    notification_url: string;
    operation_type?: string;
    payer?: {
        phone?: {
            area_code?: string;
            number?: string | number;
        };
        address?: {
            zip_code?: string;
            street_name?: string;
            street_number?: string | number;
        };
        email?: string;
        identification?: {
            number?: string;
            type?: string;
        };
        name?: string;
        surname?: string;
        date_created?: string | number;
        last_purchase?: string | number;
    };
    payment_methods?: {
        default_card_id?: string | number;
        default_payment_method_id?: string | number;
        excluded_payment_methods?: { id?: string }[];
        excluded_payment_types?: { id?: string }[];
        installments?: number;
        default_installments?: number;
    };
    processing_modes?: string | number;
    product_id?: string | number;
    redirect_urls?: {
        failure?: string;
        pending?: string;
        success?: string;
    };
    sandbox_init_point?: string;
    site_id?: string;
    shipments?: {
        default_shipping_method?: string | number;
        receiver_address?: {
            zip_code?: string;
            street_name?: string;
            street_number?: string | number;
            floor?: string;
            apartment?: string;
            city_name?: string | number;
            state_name?: string | number;
            country_name?: string | number;
        };
    };
    statement_descriptor?: string;
    total_amount?: string | number;
    last_updated?: string | number;
    financing_group?: string;
}
