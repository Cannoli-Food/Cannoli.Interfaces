import { EEngineType } from '../enum/engine-type.enum';
import { IEntity } from './i-entity';
import { IOrderV3 } from './i-order-v3';
import { IPrintInfo } from './i-print-info';
import { IProduct } from './i-product';
import { IProductionPlace } from './i-production-place';
export interface IPreparing extends IEntity {
    // #region Properties (15)

    actions: [{ status: EPreparingStatus, createdAt: Date; }],
    customer: string,
    deliveryNote: string,
    engineId: string,
    engineType: EEngineType,
    items: IPreparingItem[],
    orderId: string,
    orderMode: string;
    orderType: string;
    praparationPlaceId: string,
    printConfig: IPrintInfo,
    printed: boolean,
    shortId: string;
    status: EPreparingStatus,
    user: string,

    // #endregion Properties (15)
}

export interface IPreparingItem {
    // #region Properties (11)

    code: string,
    description: string,
    id: string,
    isDone: boolean,
    itemId: number,
    observation: string,
    /**
     * @Deprecated Use `preparationPlacedId` instead
     */
    preparationPlace: null,
    preparationPlaceId: null,
    productId: string,
    quantity: number,
    type: 'OBSERVATION' | 'PRODUCT' | 'TOPPING' | 'PARENT' | 'CHILD',

    // #endregion Properties (11)
}

export enum EPreparingStatus {
    preparing = 'PREPARING',
    paused = 'PAUSED',
    placed = 'PLACED',
    schedule = 'SCHEDULE',
    done = 'DONE',
    cancelled = 'CANCELLED',
}