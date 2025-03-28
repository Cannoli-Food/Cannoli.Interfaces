import { EIFoodMerchantStatusState } from '../enums/ifood-merchant-status-state.enum';
import { IIFoodMerchantStatusMessage } from './i-ifood-merchant-status-message';
import { IIFoodMerchantStatusReopenable } from './i-ifood-merchant-status-reopenable';
import { IIFoodMerchantStatusValidation } from './i-ifood-merchant-status-validation';

export interface IIFoodMerchantStatus {
  operation: string;
  salesChannel: string;
  available: boolean;
  state: EIFoodMerchantStatusState;
  reopenable: IIFoodMerchantStatusReopenable;
  validations: IIFoodMerchantStatusValidation[];
  message: IIFoodMerchantStatusMessage;
}
