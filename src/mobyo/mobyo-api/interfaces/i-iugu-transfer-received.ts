import { IIuguCustomVariable } from './i-iugu-custom-variable';

export interface IIuguTransferReceived {
    amountCents: string;
    amountLocalized: Date;
    createdAt: Date;
    id: string;
    sender: {
        id: string;
        name: string;
    };
    customVariables?: IIuguCustomVariable[];
}

