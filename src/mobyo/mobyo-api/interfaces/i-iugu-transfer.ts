import { IIuguTransferReceived } from './i-iugu-transfer-received';
import { IIuguTransferSent } from './i-iugu-transfer-sent';

export interface IIuguTransfer {
    sent: IIuguTransferSent[];
    received: IIuguTransferReceived[];
}

