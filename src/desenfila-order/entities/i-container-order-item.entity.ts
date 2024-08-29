import { IDesenfilaContainerOrderItem } from "../interfaces/i-container-order-item";

export class DesenfilaContainerOrderItemEntity implements IDesenfilaContainerOrderItem {
public  addition: number = 0;
public  amount: number = 0;
public  code: string = "";
public  discount: number = 0;
public  id: string = "";
public  name: string = "";
public  netAmount: number = 0;
public  quantity: number = 0;
public  unit: string = "";
public  unitPrice: number = 0;


  constructor(data?: Partial<DesenfilaContainerOrderItemEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
