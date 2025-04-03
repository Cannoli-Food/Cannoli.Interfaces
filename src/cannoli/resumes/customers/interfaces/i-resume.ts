import { IInfo, ICannoliInfo } from '../../../../general';
import { IResumeEngine, IResumeItem } from '../../interfaces';

export interface IResumeCustomer {
  id: string; // padrão AAAAMMDD
  createdAt: Date;
  updatedAt: Date;
  item: IResumeItem;
  items: { id: string; item: IResumeItem }[]; // id no padrão MM - DD - HH
  engines: IResumeEngine[];
  info: ICannoliInfo | IInfo;
}
