import { IEntity } from "./i-entity";

export interface IDeliverer extends IEntity {
    // #region Properties (8)

    cellPhone: string;
    email?: string;
    name: string;
    nickName: string;
    tags: string[];
    ordersCountDeliveredOnRestaurant: [];
    pictureUrl?: string;

    // #endregion Properties (8)
}
