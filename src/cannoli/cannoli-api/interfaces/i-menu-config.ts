
export interface IMenuConfig {
    paymentOnline: boolean;
    paymentOffline: boolean;
    adjustPrice: boolean;
    adjustPriceValue: number;
    desenfilaToken: string;
    userToken: string;
    liveApiToken: string;
    cannoliToken: string;
    iuguAccountId: string;
    method: 'DELIVERY' | 'INDOOR' | 'TAKEOUT';
    mode: 'DEFAULT' | 'TABLE' | 'PICKUP_AREA' | 'AUTO' | 'USER';
    scheduled: boolean; // Permite agendar
    allowTakeout: boolean;
    allowTable: boolean;
    allowDefault: boolean;
    layout: 'RESTAURANT' | 'MARKET' | 'PIZZA';
    preOrder: boolean;
}
