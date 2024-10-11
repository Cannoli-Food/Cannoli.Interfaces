import { ENineNineVehicleType } from '../../enums';
import { INineNinePackageInfo } from '../responses';
import { INineNineAddressCreateInfo } from './i-address-info-create';

export interface INineNineCreateData {
  vehicle_type: ENineNineVehicleType;
  external_order_id: string;
  pickup_info: INineNineAddressCreateInfo;
  dropoff_info: INineNineAddressCreateInfo;
  package_info: INineNinePackageInfo;
  estimate_id: string;
  estimate_created_time: number;
  need_pickup_code: boolean;
  need_dropoff_code: boolean;
}
