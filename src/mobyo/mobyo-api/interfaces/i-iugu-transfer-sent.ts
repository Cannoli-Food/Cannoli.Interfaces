import { IIuguCustomVariable } from './i-iugu-custom-variable';

export interface IIuguTransferSent {
    amountCents: string;
    amountLocalized: Date;
    createdAt: Date;
    id: string;
    receiver: {
        id: string;
        name: string;
    };
    customVariables?: IIuguCustomVariable[];
}

