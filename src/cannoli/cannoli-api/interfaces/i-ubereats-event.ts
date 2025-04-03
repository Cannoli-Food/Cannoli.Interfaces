import { IEntity } from './i-entity';

export interface IUbereatsEvent extends IEntity {
    eventId: string;
    eventTime: number;
    eventType: 'orders.notification' | 'orders.cancelation';
    meta: {
        resourceId: string,
        status: 'pos',
        userId: string,
    };
    resourceHref: string;
    webhookMeta: {
        clientId: string,
        webhookConfigId: string,
        webhookMsgTimestamp: number,
        webhookMsgUuid: string,
    };
}
