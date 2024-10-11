import { ENineNineVehicleType } from '../../enums/vehicle-type.enum';
import { INineNineAddressInfo } from './i-address-info';
import { INineNineDriverInfo } from './i-driver-info';
import { INineNinePackageInfo } from './i-package-info';
import { INineNinePriceInfo } from './i-price-info';
import { INineNineVerifyInfo } from './i-verify-info';

export interface INineNineStatusData {
  vehicle_type: ENineNineVehicleType;
  order_id: string;
  new_order_id: string;
  status: string;
  create_timestamp: number;
  driver_info: INineNineDriverInfo;
  dropoff_info: INineNineAddressInfo;
  pickup_info: INineNineAddressInfo;
  verify_info: INineNineVerifyInfo;
  package_info: INineNinePackageInfo;
  price_info: INineNinePriceInfo;
}
