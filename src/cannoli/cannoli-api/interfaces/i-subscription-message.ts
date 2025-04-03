export interface ISubscriptionMessage {
    name: string;
    token: string;
    handlerPrint: boolean;
    updatedAt: Date;
    active: boolean;
}
