import { IOrderV3 } from '../../cannoli/cannoli-api/interfaces/i-order-v3';
import { IOrder } from '../../order';
import { EFcmSkill } from '../enums/skill.enum';

export interface IFcmDataOrder {
  callback: string;
  companyId: string;
  containerId: string;
  skill: EFcmSkill;
  pos: string;
  table: string;
  order: IOrderV3 | IOrder
}
