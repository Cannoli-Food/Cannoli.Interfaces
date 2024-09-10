import { IuguBankEnum } from './iugu-bank.enum';

export interface IIuguWithdraw {
    id: string;
    status: string | 'pending';
    createdAt: Date;
    updatedAt: Date;
    reference: string;
    amount: string;
    accountName: string;
    accountId: string;
    agreementEffect: boolean;
    bankAddress: {
        bank: IuguBankEnum;
        bank_cc: string;
        bank_ag: string;
        account_type: 'Corrente' | 'Poupança';
    };
}

