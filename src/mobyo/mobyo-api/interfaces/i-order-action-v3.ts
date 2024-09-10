
import { OrderStatusEnum } from './order-v3-status.enum';

export class IOrderActionV3 {
    status: OrderStatusEnum;
    
    createdAt: Date;
    
    user?: any;
}
