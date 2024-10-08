import { CustomerEntity } from '../../../customer';
import { IAddress } from '../../../general';
import { IUsedVoucher } from '../interfaces';
import { ICustomerMobyo } from '../interfaces/i-customer-mobyo';

export class CustomerMobyoEntity extends CustomerEntity implements ICustomerMobyo {
  // #region Properties (9)

  public active: boolean = true;
  public addresses: IAddress[] = [];
  public companyId: string = '';
  public containerId: string = '';
  public engines: string[] = [];
  public isTest: boolean = false;
  public ordersCountOnRestaurant: number = 0;
  public uid: string = '';
  public version: string = '1.0.2';
  public birthday: Date | null = null;
  // #endregion Properties (9)

  // #region Constructors (1)

  constructor(data?: Partial<CustomerMobyoEntity>) {
    super(data);
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
