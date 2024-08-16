import { IDelivererMobyo } from '..';
import { IOrder } from '../../../order';

export class DelivererMobyoEntity implements IDelivererMobyo {
  // #region Properties (10)

  public active: boolean = true;
  public email?: string | undefined = '';
  public id: string = '';
  public internationalCode: string = '+55';
  public name: string = '';
  public nickName: string = '';
  public ordersCountDeliveredOnRestaurant: IOrder[] = [];
  public phoneNumber: string = '';
  public pictureUrl?: string | undefined = '';
  public tags: string[] = [];

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<DelivererMobyoEntity>) {
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
