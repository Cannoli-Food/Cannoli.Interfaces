
import { IDeliverer } from '../../deliverers/interfaces/i-deliverer';

export class IOrderDelivererV3 {
    // #region Properties (5)

    
    public collectedAt?: Date | null;
    
    public deliveredAt?: Date | null;
    
    public id: string;
    
    public nickName: string;
    
    public pictureUrl: string;

    // #endregion Properties (5)
    constructor(obj: IDeliverer) {
        this.collectedAt = null;
        this.deliveredAt = null;
        this.id = obj.id || '';
        this.nickName = obj.nickName;
        this.pictureUrl = obj.pictureUrl;
    }
}
