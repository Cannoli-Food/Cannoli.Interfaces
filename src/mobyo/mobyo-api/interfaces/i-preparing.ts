import { EngineTypesEnum } from '../../engines/interfaces/engine-type.enum';
import { IOrderV3 } from '../../order-v3/interfaces-v3/i-order-v3';
import { OrderV3TypeEnum } from '../../order-v3/interfaces-v3/order-v3-type.enum';
import { factoryEntity, IEntity } from './../../../entities/i-entity';
import { factoryId } from './../../../shared/functions/factory-id.function';
import { IProduct } from './../../products/i-product';
import { IPrintInfo } from './i-print-info';
import { IProductionPlace } from './i-production-place';
export interface IPreparing extends IEntity {
    // #region Properties (15)

    actions: [{ status: PreparingStatus, createdAt: Date; }],
    customer: string,
    deliveryNote: string,
    engineId: string,
    engineType: EngineTypesEnum,
    items: IPreparingItem[],
    orderId: string,
    orderMode: string;
    orderType: string;
    praparationPlaceId: string,
    printConfig: IPrintInfo,
    printed: boolean,
    shortId: string;
    status: PreparingStatus,
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

export enum PreparingStatus {
    preparing = 'PREPARING',
    paused = 'PAUSED',
    placed = 'PLACED',
    schedule = 'SCHEDULE',
    done = 'DONE',
    cancelled = 'CANCELLED',
}

export function factoryEmptyPreparing(order: IOrderV3, local: IProductionPlace, status: PreparingStatus = PreparingStatus.placed): IPreparing {
    const result = factoryEntity<IPreparing>(order.containerId, order.companyId);
    result.status = status;
    result.printed = false;
    result.praparationPlaceId = local.id;
    result.printConfig = local;
    result.engineId = order.engineId;
    result.deliveryNote = order.extraInfo;
    result.customer = order.customer?.name;
    result.user = order.engineType;
    result.orderId = order.id;
    result.orderMode = order.orderType;
    result.orderType = order.orderType;
    result.actions = [{ status, createdAt: new Date() }];
    result.shortId = order.displayId;
    result.items = [];
    return result;
}

export function factoryPreparingItem(prod: IProduct, quantity: number, obs?: string, type: 'OBSERVATION' | 'PRODUCT' | 'TOPPING' | 'PARENT' | 'CHILD' = 'PRODUCT') {
    return {
        preparationPlace: null,
        preparationPlaceId: null,
        isDone: false,
        type,
        code: prod.code,
        productId: prod.id,
        id: factoryId(),
        itemId: 0,
        description: prod.name,
        quantity,
        observation: obs,
    } as IPreparingItem;
}
export function factoryEmptyPreparingV3(order: IOrderV3, local: IProductionPlace, status: PreparingStatus = PreparingStatus.placed): IPreparing {
    const result = factoryEntity<IPreparing>(order.containerId, order.companyId);
    result.status = status;
    result.printed = false;
    result.praparationPlaceId = local.id;
    result.printConfig = local;
    result.engineId = order.engineId;
    result.engineType = order.engineType as any;
    result.deliveryNote = order.orderType === OrderV3TypeEnum.indoor ? order.indoor?.table : '';
    result.customer = order.customer?.name;
    result.user = order.engineType;
    result.orderId = order.id;
    result.orderMode = order.orderType === OrderV3TypeEnum.delivery ? order.delivery?.mode : (order.orderType === 'INDOOR' ? order.indoor?.mode : order.takeout?.mode);
    result.orderType = order.orderType;
    result.actions = [{ status, createdAt: new Date() }];
    result.shortId = order.displayId;
    result.items = [];
    return result;
}

export function factoryPreparingItemV3(prod: IProduct, quantity: number, obs?: string, type: 'OBSERVATION' | 'PRODUCT' | 'TOPPING' | 'PARENT' | 'CHILD' = 'PRODUCT') {
    return {
        preparationPlace: null,
        preparationPlaceId: null,
        isDone: false,
        type,
        code: prod.code,
        productId: prod.id,
        id: factoryId(),
        itemId: 0,
        description: prod.name,
        quantity,
        observation: obs,
    } as IPreparingItem;
}