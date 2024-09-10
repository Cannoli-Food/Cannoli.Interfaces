import { IIuguInvoiceItem } from './i-iugu-invoice-items';
import { IuguInvoicesStatusEnum } from './iugu-invoices-status.enum';

export interface IIuguInvoice {
    id: string;
    due_date: string,
    currency: 'BRL',
    pix: {
        qrcode: string;
    },
    customer_id: string,
    discount_cents: string,
    email: string,
    expiration_url: string,
    notification_url: string,
    return_url: string,
    status: IuguInvoicesStatusEnum,
    tax_cents: string,
    updated_at: Date,
    total_cents: number,
    commission_cents: string,
    secure_id: string,
    secure_url: string,
    user_id: string,
    commission: string,
    total: string,
    created_at: string,
    items: IIuguInvoiceItem[],
    variables: any[],
    logs: any[];
}
