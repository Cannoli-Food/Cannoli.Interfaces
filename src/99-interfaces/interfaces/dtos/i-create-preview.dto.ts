import { ENineNineVehicleType } from '../../enums';
import { INineNineAddressPreviewInfo } from './i-address-info-preview';

export interface INineNinePreviewData {
  vehicle_type: ENineNineVehicleType;
  pickup_info: INineNineAddressPreviewInfo;
  dropoff_info: INineNineAddressPreviewInfo;
}
