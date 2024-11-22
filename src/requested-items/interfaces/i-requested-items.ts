import { EOrderExtraInfo } from '../../order/enums/extra-info.enum';
import { IRequestedItemData } from './i-requested-items-data';

export interface IRequestedItems {
  // #region Properties (11)

  companyId: string | null;
  containerId: string | null;
  createdAt: Date;
  pos: string | null;
  id: string;
  updatedAt: Date;
  preview: boolean;
  isPaid: boolean;
  token: string;
  status: EOrderExtraInfo | null;
  data: IRequestedItemData[];
}
