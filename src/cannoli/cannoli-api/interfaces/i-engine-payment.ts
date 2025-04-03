export interface IEnginePayment {
    id: string;
    method: 'ondelivery' | 'app';
    name: string;
    type: 'default' | 'credit' | 'debit' | 'wallet' | 'voucher';
}
