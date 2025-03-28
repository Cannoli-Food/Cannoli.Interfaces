import { EIFoodMerchantStatusState } from '../enums/ifood-merchant-status-state.enum';
import { IIFoodMerchantStatusMessage } from './i-ifood-merchant-status-message';

export interface IIFoodMerchantStatusValidation {
  id: string;
  code: string;
  state: EIFoodMerchantStatusState;
  message: IIFoodMerchantStatusMessage;
}
