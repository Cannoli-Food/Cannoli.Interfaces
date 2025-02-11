import { IIFoodAddress } from "./i-ifood-address";

export interface IIFoodMerchant {
    id: string;
    name: string;
    corporateName: string;
    description: string;
    averageTicket: number;
    exclusive: true;
    type: string;
    status: string;
    createdAt: Date | string;
    address: IIFoodAddress;
    operations: {
        name: string;
        salesChannel: {
            name: string;
            enabled: string;
        };
    };
}
