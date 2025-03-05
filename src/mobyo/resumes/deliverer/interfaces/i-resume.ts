import { IInfo, IMobyoInfo } from '../../../../general';
import { IResumeChildInfo } from '../../../../resume/interfaces/I-info-resume-child';
import { IResumeItem } from '../../interfaces';

export interface IResumeDeliverer {
  id: string; // padrão AAAAMMDD
  createdAt: Date;
  updatedAt: Date;
  active:boolean;
  item: IResumeItem;
  items: { id: string; item: IResumeItem }[]; // id no padrão MM - DD - HH
  info: IMobyoInfo | IInfo;
  delivererInfo: IResumeChildInfo
}
