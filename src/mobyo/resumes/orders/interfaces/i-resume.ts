import { IInfo, IMobyoInfo } from '../../../../general';
import { IResumeEngine, IResumeItem } from '../../interfaces';

export interface IResumeOrder {
  id: string; // padrão AAAAMMDD
  createdAt: Date;
  updatedAt: Date;
  item: IResumeItem;
  items: { id: string; item: IResumeItem }[]; // id no padrão MM - DD - HH
  engines: IResumeEngine[];
  info: IMobyoInfo | IInfo;
}
