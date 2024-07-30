import { EDiscountType } from '../../general';
import { ESponsorIdentifier } from '../enums/sponsor-identifier.enum';
export interface ISponsorFee {
  type: EDiscountType;
  amount: number;
  method: ESponsorIdentifier;
}
