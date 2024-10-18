import { EEngineType } from '../../mobyo-api/enum/engine-type.enum';
import { IResumeItem } from './i-resume-item';

export interface IResumeEngine {
  id: string;
  name: string;
  type: EEngineType;
  item: IResumeItem;
}
