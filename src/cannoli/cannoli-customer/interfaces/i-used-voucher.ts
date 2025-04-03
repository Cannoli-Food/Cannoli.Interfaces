import { ICustomer } from '../../../customer';
import { IAddress } from '../../../general';

export interface IUsedVoucher {
  // #region Properties (9)

  key: string;
  id: string;
  uses: number;
  updatedAt: Date;
}
