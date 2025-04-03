import { IMenuScheduleV2 } from '../../cannoli/cannoli-api/interfaces/i-menu-schedule-v2';
import { EVoucherRuleType } from '../enums/rule-types.enum';

export interface IVoucherRule {
  type: EVoucherRuleType;
  value?: string | number | Date | boolean | IMenuScheduleV2;
  description: string;
}
